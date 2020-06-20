#!/bin/bash
set -e

yarn build:libs

VERSION=`cat lerna.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]'n`

if [ -z "${VERSION}" ]; then
  echo "Null release version! Can not build Storybook."
  exit 0
fi

yarn lerna run test:ci

cd "$TRAVIS_BUILD_DIR"
mkdir -p ../tmp

cd "$TRAVIS_BUILD_DIR/packages/docs"
yarn build -o "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}"

cd "$TRAVIS_BUILD_DIR"
git checkout .
git checkout master-docs

cd scripts
node helpers/addVersionOnConfig.js "v${VERSION}"

cd "${TRAVIS_BUILD_DIR}"
cp -r "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}" packages/docs/dist/releases

git add --all
git commit -m "docs: generating storybook for version ${VERSION} [skip ci]"

git push -f -u origin master-docs
