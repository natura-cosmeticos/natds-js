#!/bin/bash
set -e

cd "${TRAVIS_BUILD_DIR}"
mkdir -p ../tmp

cd "${TRAVIS_BUILD_DIR}/packages/docs"
yarn build -o "${TRAVIS_BUILD_DIR}/../tmp/v${TRAVIS_BRANCH}" --quiet

cd "${TRAVIS_BUILD_DIR}"
git checkout "${TRAVIS_BRANCH}-docs"

cp -r "${TRAVIS_BUILD_DIR}/../tmp/${TRAVIS_BRANCH}" packages/docs/dist/releases

node scripts/helpers/addVersionOnConfig.js "${TRAVIS_BRANCH}"

git add --all
git commit -m "docs: generate docs for prerelease version ${TRAVIS_BRANCH} [skip ci]" --allow-empty
git push -f -u origin "${TRAVIS_BRANCH}-docs"
