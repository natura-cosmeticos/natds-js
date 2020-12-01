#!/bin/bash

yarn install
yarn build:storybook
mkdir -p build
cp -r packages/web/docs/dist/* build