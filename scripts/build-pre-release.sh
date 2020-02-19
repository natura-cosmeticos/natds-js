#!/bin/bash
set -e

VERSION=`npm run version --silent`

cd scripts

NEW_VERSION=`node helpers/buildVersion.js $VERSION`

VERSION_WO_ALPHA=`node helpers/removeAlphaFromVersion.js ${NEW_VERSION}`

cd ..

yarn build:libs

yarn lerna run test:ci

cd $TRAVIS_BUILD_DIR

mkdir -p ../tmp

cd $TRAVIS_BUILD_DIR/packages/docs

yarn build -o "${TRAVIS_BUILD_DIR}/../tmp/v${NEW_VERSION}" --quiet

cd $TRAVIS_BUILD_DIR

git checkout .

git checkout "v${VERSION_WO_ALPHA}-docs"

cd scripts

node helpers/addVersionOnConfig.js $NEW_VERSION

cp -r ${TRAVIS_BUILD_DIR}/../tmp/v${VERSION_WO_ALPHA} packages/docs/dist/releases

# Travis will make the commit

git config --global user.email "travis@travis-ci.org"

git config --global user.name "Travis CI"

git add --all

git commit -m "Travis Commit: Generating docs for alpha version ${NEW_VERSION}"

git push -f -u origin v${VERSION_WO_ALPHA}-docs
