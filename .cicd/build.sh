#!/bin/bash

yarn install
yarn build:storybook
mkdir -p build
cp packages/web/docs/dist/* build

