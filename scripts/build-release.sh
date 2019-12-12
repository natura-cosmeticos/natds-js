#!/bin/bash
set -e

yarn build:libs

VERSION=`cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]'n`

if [ -z ${VERSION} ]; then
  echo "Null release version! Ending script with error"
  exit 1
fi

cd packages/docs

rm -rf dist/releases/v${VERSION}

yarn build -o "dist/releases/v${VERSION}" --quiet

cd ../../scripts

git add --all

git stash

git checkout master-docs

git stash pop

node helpers/addVersionOnConfig.js $VERSION

git add --all
git commit -m "Travis Commit: Generating docs for production versions ${VERSION}"

git push -f -u origin master-docs



