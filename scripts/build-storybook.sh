#!/bin/bash
set -e

echo "STORYBOOK Opening project root directory..."
cd "${TRAVIS_BUILD_DIR}"

echo "STORYBOOK Fetching packages version..."
VERSION=`cat lerna.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]'n`

if [ -z "${VERSION}" ]; then
  echo "STORYBOOK Can not build Storybook. Could not find version information at lerna.json file."
  exit 0
else
  echo "STORYBOOK Generating Storybook for version ${VERSION}..."
fi

echo "STORYBOOK Creating temp directory for bundle..."
mkdir -p ../tmp

echo "STORYBOOK Opening docs package directory..."
cd "${TRAVIS_BUILD_DIR}/packages/docs"

echo "STORYBOOK Generating JSON report for Jest addon..."
yarn lerna run test:packages

echo "STORYBOOK Building Storybook..."
yarn build -o "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}" --quiet

echo "STORYBOOK Going back to project root directory..."
cd "${TRAVIS_BUILD_DIR}"

echo "STORYBOOK Updating from remote..."
git remote update

echo "STORYBOOK Fetching from Git..."
git fetch

echo "STORYBOOK Checking out..."
git checkout .

echo "STORYBOOK Switching to ${TRAVIS_BRANCH}-docs branch"
if [ "${TRAVIS_BRANCH}" = "master" ]; then
  git checkout master-docs
else
  git checkout -B "${TRAVIS_BRANCH}-docs"
fi

echo "STORYBOOK Fetching from Git..."
git fetch

echo "STORYBOOK Showing /docs dist current content"
ls "${TRAVIS_BUILD_DIR}/packages/docs/dist"

echo "STORYBOOK Opening helpers script directory..."
cd scripts

echo "STORYBOOK Adding version ${VERSION} to versions JSON file"
node helpers/addVersionOnConfig.js "${VERSION}"

echo "STORYBOOK Going back to project root directory..."
cd "${TRAVIS_BUILD_DIR}"

echo "STORYBOOK Copying generated Storybook to releases directory..."
cp -r "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}" packages/docs/dist/releases

echo "STORYBOOK Committing changes..."
git add --all
git commit -m "docs: generating storybook for version ${VERSION} [skip ci]" --allow-empty

echo "STORYBOOK Updating ${TRAVIS_BUILD_DIR}-docs branch..."
git push -f -u origin "${TRAVIS_BUILD_DIR}-docs"
