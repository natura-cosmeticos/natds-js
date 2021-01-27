#!/bin/bash
set -e

[[ -z "${CHANGE_BRANCH}" ]] && BRANCH=$BRANCH_NAME || BRANCH=$CHANGE_BRANCH

echo $BRANCH
