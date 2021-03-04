#!/bin/bash
set -e

BRANCH_NAME=$(bash ./.cicd/get-branch-name.sh)
FOLDER_NAME=${BRANCH_NAME//[\/]/-}
OUTPUT_PATH=build

mkdir -p build

if [ -z $(./.cicd/skip-commit.sh) ]; then

  if [[ $BRANCH_NAME =~ \[(natds-react)\] ]]; then
    OUTPUT_PATH=build/natds-react
    yarn build:storybook
    cp -r packages/react/docs/dist/* ${OUTPUT_PATH}
    exit 0
  fi

  if [ -z $1 ]; then
    OUTPUT_PATH=build/${FOLDER_NAME}
    mkdir -p ${OUTPUT_PATH}
    echo "Created ${FOLDER_NAME} folder"
  else
    yarn build:styleguide
  fi

  yarn build:storybook
  cp -r packages/web/docs/dist/* ${OUTPUT_PATH}

fi
