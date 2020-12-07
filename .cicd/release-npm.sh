#!/bin/bash

echo "release NPM"

[[ -z "${CHANGE_BRANCH}" ]] && BRANCH=$BRANCH_NAME || BRANCH=$CHANGE_BRANCH

NPM_TOKEN=$NATDS_NPM_TOKEN
GH_TOKEN=$NATDS_GH_TOKEN
RELEASE_BRANCH="alpha.${BRANCH}.$BUILD_NUMBER"

echo $BRANCH

if [[ $BRANCH =~ ^DSY-([0-9]+)$ ]]; then
    echo "$BRANCH pre-release"
    yarn lerna:prerelease:version:ci --preid ${RELEASE_BRANCH}
    yarn lerna:prerelease:publish:ci --pre-dist-tag ${BRANCH}
elif [[ $BRANCH = "main" ]]; then
    echo "Release"
    yarn lerna:release:version:ci
    yarn lerna:release:publish:ci
else 
    echo "Nothing to publish"
fi