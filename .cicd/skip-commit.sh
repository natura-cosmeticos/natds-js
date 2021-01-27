#!/bin/bash
set -e

COMMIT_MESSAGE=$(git log -1 --pretty=%B)

echo "commit message ${COMMIT_MESSAGE}"


if [[ $COMMIT_MESSAGE =~ "\[(skip-ci|ci-skip)\]" ]]; then
   echo "skip-ci detected!"
   exit 0
fi
