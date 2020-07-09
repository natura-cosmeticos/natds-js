#!/bin/bash
set -e

echo "Opening project root directory..."
cd "$TRAVIS_BUILD_DIR"

echo "Fetching packages version..."
VERSION=`cat lerna.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]'n`

if [ -z "${VERSION}" ]; then
  echo "Can not build Storybook. Could not find version information at lerna.json file."
  exit 0
else
  echo "Generating Storybook for version ${VERSION}..."
fi

echo "Creating temp directory for Storybook bundle..."
mkdir -p ../tmp

echo "Opening Storybook directory..."
cd "$TRAVIS_BUILD_DIR/packages/docs"

echo "Generating JSON report for Jest addon..."
yarn lerna run test:packages

echo "Building Storybook..."
yarn build -o "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}" --quiet

echo "Going back to project root directory..."
cd "$TRAVIS_BUILD_DIR"

echo "Moving to docs branch..."
git checkout .
git checkout master-docs

echo "Adding version ${VERSION} to versions JSON file..."
cd scripts
node helpers/addVersionOnConfig.js "v${VERSION}"

echo "Going back to project root directory..."
cd "${TRAVIS_BUILD_DIR}"

echo "Copying generated Storybook to releases directory..."
cp -r "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}" packages/docs/dist/releases

echo "Committing changes..."
git add --all
git commit -m "docs: generating storybook for version ${VERSION} [skip ci]"

echo "Updating master-docs branch..."
git push -f -u origin master-docs
