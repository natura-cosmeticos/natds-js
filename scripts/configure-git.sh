git remote rm origin

# This remote is using a contributor account and an OAuth key from GitHub
# Adapted from https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci
git remote add origin "https://${GITHUB_API_USER}:${GITHUB_API_KEY}@github.com/natura-cosmeticos/natds-js"

git fetch --quiet
git checkout "${TRAVIS_BRANCH}"

# System Team will make the commit
git config --global user.email "systemteamopensource@natura.net"
git config --global user.name "${GITHUB_API_USER} in behalf of System Team Open Source"

npm config set '//registry.npmjs.org/:_authToken' "${NPM_AUTH_TOKEN}"
yarn config set _authToken "${NPM_AUTH_TOKEN}"

