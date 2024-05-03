#!/bin/bash
set -eo pipefail
 
if ./cicd/skip-commit.sh; then
    echo "Skipping commit as per skip-commit.sh"
    exit 0
fi
 
echo "Quality Check"
 
yarn --cwd packages/react lint
 
if [ -n "$NATDS_CODECOV_WEB" ]; then
    yarn --cwd packages/react test:ci "$NATDS_CODECOV_WEB"
    ls
else
    yarn --cwd packages/react test:ci
    ls
fi