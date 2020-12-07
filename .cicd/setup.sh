#!/bin/bash

printenv

bash ./configure-git.sh

yarn install
yarn build