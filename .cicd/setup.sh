#!/bin/bash
set -e

if [ -z $(./.cicd/skip-commit.sh) ]; then
    echo "SKIP CI [ON] - SETUP"

    bash .cicd/configure-git.sh

    yarn install
    yarn build
fi
