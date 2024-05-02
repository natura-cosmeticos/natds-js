#!/bin/bash
set -e
 
if [ -z $(./.cicd/skip-commit.sh) ]; then
    bash .cicd/configure-git.sh
 
    yarn add react
 
    yarn build
fi
