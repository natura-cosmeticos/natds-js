#!/bin/bash
set -e

echo "Quality Check"

yarn lint
yarn test:ci
