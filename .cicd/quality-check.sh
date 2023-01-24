#!/bin/bash
set -e

if [ -z $(./.cicd/skip-commit.sh) ]; then

    echo "SKIP CI [ON] - Quality Check"

    echo "Quality Check"

    yarn lint
    yarn test:ci ${NATDS_CODECOV_WEB}
fi
