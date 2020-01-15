#!/bin/bash
set -e

LAST_MERGE_MESSAGE=`git log --first-parent --merges -1 --oneline`

RELEASE_VERSION=`node scripts/helpers/getVersionFromMergeMessage.js "${LAST_MERGE_MESSAGE}"`

# Checking for null release version
if [ -z $RELEASE_VERSION ]
then
  echo "Null release version! Ending script with error"
  exit 1
elif [ $RELEASE_VERSION = "hotfix" ]
then
  npm version patch --no-git-tag-version -f
  RELEASE_VERSION=`cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]'`
else
  npm version $RELEASE_VERSION --no-git-tag-version -f
fi

git remote rm origin
# This remote is using a contributor account and an OAuth key from github
# Adapted from https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci
git remote add origin https://$GITHUB_API_USER:$GITHUB_API_KEY@github.com/natura-cosmeticos/natds-js

git fetch

git checkout master

# Travis will make the commit
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git add --all
git commit -m "Travis Commit: Bumping production version to ${RELEASE_VERSION}"

yarn lerna version $RELEASE_VERSION --no-push --conventional-commits --force-publish --yes

yarn build:libs

git push -f -u origin master

git push origin --tags -q || true

yarn config set _authToken ${NPM_AUTH_TOKEN}

PACKAGES=("packages/styles" "packages/web" "packages/icons")

for package in "${PACKAGES[@]}"
do
  cd $package
  yarn pack --filename $RELEASE_VERSION.tgz
  yarn publish $RELEASE_VERSION.tgz --new-version $RELEASE_VERSION
  rm $RELEASE_VERSION.tgz
  cd ../..
done
