#!/bin/bash
set -e

if [ -z $(./.cicd/skip-commit.sh) ]; then

    echo "release NPM"
 
    BRANCH=$(bash ./.cicd/get-branch-name.sh)
    RELEASE_BRANCH="alpha.${BRANCH}.$BUILD_NUMBER"
    COMMIT_MESSAGE=$(git log -1 --pretty=%s)

    echo $BRANCH
 
    if [[ $BRANCH =~ ^DSY-([0-9]+)$ ]]; then
        echo "$BRANCH pre-release"
        GH_TOKEN=$NATDS_GH_TOKEN yarn lerna:prerelease:version:ci --preid ${RELEASE_BRANCH}
        GH_TOKEN=$NATDS_GH_TOKEN yarn lerna:prerelease:publish:ci --pre-dist-tag ${BRANCH}

        elif [[ $BRANCH = "main" ]]; then
        echo "Release"
        GH_TOKEN=$NATDS_GH_TOKEN yarn lerna:release:version:ci
        GH_TOKEN=$NATDS_GH_TOKEN yarn lerna:release:publish:ci

    else
        echo "Nothing to publish"
    fi
fi
