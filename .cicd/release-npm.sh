#!/bin/bash

echo "release NPM"

BRANCH="DSY-1796"
RELEASE_BRANCH="alpha.${BRANCH}.$BUILD_NUMBER"

NPM_TOKEN=$NATDS_NPM_TOKEN
GH_TOKEN=$NATDS_GH_TOKEN

yarn lerna:prerelease:version:ci --preid ${RELEASE_BRANCH}
yarn lerna:prerelease:publish:ci --pre-dist-tag ${BRANCH}
