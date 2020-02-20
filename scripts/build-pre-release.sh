#!/bin/bash
set -e

VERSION=`npm run version --silent`

cd scripts

NEW_VERSION=`node helpers/buildVersion.js $VERSION`

cd ..

yarn build:libs

yarn lerna run test:ci

cd $TRAVIS_BUILD_DIR

mkdir -p ../tmp

cd $TRAVIS_BUILD_DIR/packages/docs

yarn build -o "${TRAVIS_BUILD_DIR}/../tmp/v${NEW_VERSION}" --quiet

cd $TRAVIS_BUILD_DIR

git checkout .

cd scripts

VERSION_WO_ALPHA=`node helpers/removeAlphaFromVersion.js ${NEW_VERSION}`

cd ..

git remote rm origin
# This remote is using a contributor account and an OAuth key from github
# Adapted from https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci
git remote add origin https://$GITHUB_API_USER:$GITHUB_API_KEY@github.com/natura-cosmeticos/natds-js

git fetch

git checkout "v${VERSION_WO_ALPHA}-docs"

cp -r ${TRAVIS_BUILD_DIR}/../tmp/v${NEW_VERSION} packages/docs/dist/releases

node helpers/addVersionOnConfig.js $NEW_VERSION

# Travis will make the commit

git config --global user.email "travis@travis-ci.org"

git config --global user.name "Travis CI"

git add --all

git commit -m "Travis Commit: Generating docs for alpha version ${NEW_VERSION}"

git push -f -u origin v${VERSION_WO_ALPHA}-docs
