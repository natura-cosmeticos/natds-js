#!/bin/bash
set -e

BRANCH_NAME=$(bash ./.cicd/get-branch-name.sh)
FOLDER_NAME=${BRANCH_NAME//[\/]/-}
OUTPUT_PATH=build

mkdir -p build

if [ -z $(./.cicd/skip-commit.sh) ]; then

    if [ -z $1 ]; then
        OUTPUT_PATH=build/${FOLDER_NAME}
        mkdir -p ${OUTPUT_PATH}
        echo "Created ${FOLDER_NAME} folder"
    fi

    yarn build:storybook
    cp -r packages/web/docs/dist/* ${OUTPUT_PATH}

    mkdir -p ${OUTPUT_PATH}/react
    cp -r packages/react/docs/dist/* ${OUTPUT_PATH}/react

fi
