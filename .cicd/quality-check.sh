#!/bin/bash
set -e

if [ -z $(./.cicd/skip-commit.sh) ]; then
  echo "Quality Check"

  yarn lint
  yarn test:ci -t ${NATDS_CODECOV_WEB}
fi
