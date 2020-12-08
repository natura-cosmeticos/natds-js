#!/bin/bash

[[ -z "${CHANGE_BRANCH}" ]] && BRANCH_NAME=$BRANCH_NAME || BRANCH_NAME=$CHANGE_BRANCH

FOLDER_NAME=${BRANCH_NAME//[\/]/-}
OUTPUT_PATH=build

yarn build:storybook
mkdir -p build

echo "Verifying $1"

if [ -z $1 ]; then
    OUTPUT_PATH=build/${FOLDER_NAME}
    mkdir -p ${OUTPUT_PATH}
    echo "Created ${FOLDER_NAME} folder"
fi

cp -r packages/web/docs/dist/* ${OUTPUT_PATH}