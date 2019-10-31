#!/bin/bash

set -e

VERSION=`npm run version --silent`

cd scripts

NEW_VERSION=`node helpers/buildVersion.js $VERSION`

cd ..

npm version $NEW_VERSION --no-git-tag-version -f

yarn build:libs

cd packages/docs

rm -rf "dist/releases/v${NEW_VERSION}"

yarn build -o "dist/releases/v${NEW_VERSION}"

cd ../../scripts

node helpers/addVersionOnConfig.js $NEW_VERSION



