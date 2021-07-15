#!/bin/bash
set -e

if [ -z $(./.cicd/skip-commit.sh) ]; then
  bash .cicd/configure-git.sh

  git checkout -- .

  yarn install
  yarn build
fi
