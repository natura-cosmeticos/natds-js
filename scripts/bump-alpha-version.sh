#!/bin/bash
set -e

VERSION=`npm run version --silent`

cd scripts

NEW_VERSION=`node helpers/buildVersion.js $VERSION`

cd ..

npm version $NEW_VERSION --no-git-tag-version -f

# Travis will make the commit
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git add --all
git commit -m "Travis Commit: Bumping alpha version to ${NEW_VERSION}"

git remote rm origin
# This remote is using a contributor account and an OAuth key from github
# Adapted from https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci
git remote add origin https://robertLichtnow:$GITHUB_API_KEY@github.com/natura-cosmeticos/natds

git push -q

git tag $NEW_VERSION

git push origin --tags -q
