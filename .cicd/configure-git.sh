#!/bin/bash
set -e

git remote rm origin
git remote add origin "https://${NATDS_GH_TOKEN}@github.com/natura-cosmeticos/natds-js"
git fetch --quiet

BRANCH=$(bash ./.cicd/get-branch-name.sh)

git checkout "${BRANCH}"

git config --global user.email "designsystem@natura.net"
git config --global user.name "Natura Design System Team"

npm config set '//registry.npmjs.org/:_authToken' "${NATDS_NPM_TOKEN}"
