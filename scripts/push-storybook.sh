#!/bin/bash
set -e

echo "STORYBOOK Adding version ${VERSION} to versions JSON file..."
cd "${TRAVIS_BUILD_DIR}/scripts"
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
