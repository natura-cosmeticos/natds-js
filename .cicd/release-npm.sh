#!/bin/bash

echo "release NPM"

BRANCH=$(git symbolic-ref --short HEAD)
RELEASE_BRANCH="alpha.${BRANCH}.$BUILD_NUMBER"

NPM_TOKEN=$NATDS_NPM_TOKEN
GH_TOKEN=$NATDS_GH_TOKEN

npx -p natds-cli configure-npm

yarn lerna:prerelease:version:ci --preid ${RELEASE_BRANCH}
yarn lerna:prerelease:publish:ci --pre-dist-tag ${BRANCH}
