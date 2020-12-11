#!/bin/bash

bash .cicd/configure-git.sh

yarn install
yarn build