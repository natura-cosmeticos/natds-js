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

echo "STORYBOOK Fetching from Git..."
git fetch

if [ "${TRAVIS_BRANCH}" = "main" ]; then
  echo "STORYBOOK At main branch"
  git checkout .

  echo "STORYBOOK Switching to ${TRAVIS_BRANCH}-docs branch..."
  git checkout main-docs
else
  echo "STORYBOOK At DSY-* branch"

  echo "STORYBOOK Updating from remote..."
  git remote update

  echo "STORYBOOK Switching to main-docs branch..."
  git checkout main-docs

  # @see https://stackoverflow.com/questions/49297153/why-is-it-not-a-commit-and-a-branch-cannot-be-created-from-it
  echo "STORYBOOK Fetching from Git..."
  git fetch --all

  echo "STORYBOOK Creating ${TRAVIS_BRANCH}-docs branch from main-docs branch..."
  git checkout -b "${TRAVIS_BRANCH}-docs" main-docs
fi

echo "STORYBOOK Adding version ${VERSION} to versions JSON file"
cd scripts
node helpers/addVersionOnConfig.js "${VERSION}"

echo "STORYBOOK Going back to project root directory..."
cd "${TRAVIS_BUILD_DIR}"

echo "STORYBOOK Copying generated Storybook to releases directory..."
cp -r "${TRAVIS_BUILD_DIR}/../tmp/v${VERSION}" packages/docs/dist/releases

echo "STORYBOOK Staging all changes..."
git add --all

echo "STORYBOOK Committing changes"
git commit -m "docs: generating storybook for version ${VERSION} [skip travis]" --allow-empty

echo "STORYBOOK Updating ${TRAVIS_BRANCH}-docs branch..."
git push -f -u origin "${TRAVIS_BRANCH}-docs"
