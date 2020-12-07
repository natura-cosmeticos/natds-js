#!/bin/bash

printenv

bash .cicd/configure-git.sh

yarn install
yarn build