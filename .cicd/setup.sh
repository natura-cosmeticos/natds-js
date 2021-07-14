#!/bin/bash
set -e

if [ -z $(./.cicd/skip-commit.sh) ]; then
  bash .cicd/configure-git.sh
  git update-index --skip-worktree -- ignore-words.txt

  yarn install
  yarn build
fi
