#!/bin/bash
set -e

COMMIT_MESSAGE=$(git log -1 --pretty=%B)

if [[ $COMMIT_MESSAGE =~ \[(skip-ci)\] ]]; then
  echo true
  exit 0
fi
