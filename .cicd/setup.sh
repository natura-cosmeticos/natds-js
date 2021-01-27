#!/bin/bash
set -e

bash .cicd/configure-git.sh

yarn install
yarn build
