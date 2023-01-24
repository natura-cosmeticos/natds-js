#!/bin/bash

echo "Release message on Teams"

BRANCH=$(bash ./.cicd/get-branch-name.sh)
echo $BRANCH

if ! [ -z $(./.cicd/skip-commit.sh) ]; then

    echo "create new file to edit"
    cp .cicd/message-teams.json .cicd/updated-message-teams.json

    NEW_VERSION=$(cat ./packages/react/package.json \
        | grep version \
        | head -1 \
        | awk -F: '{ print $2 }' \
        | sed 's/[", ]//g')

    echo "New version: $NEW_VERSION"

    sed -i '' "s/VERSIONVALUE/$NEW_VERSION/g" .cicd/updated-message-teams.json

    releaselinecontent='https://github.com/natura-cosmeticos/natds-js/compare'

    major=`echo $NEW_VERSION | cut -d. -f1`
    minor=`echo $NEW_VERSION | cut -d. -f2`
    patch=`echo $NEW_VERSION | cut -d. -f3`

    # regex for new version
    rgxversion="$major\.$minor\.$patch"

    # save last version output to file
    awk 's{print $0 > ".cicd/message-release.txt"}; $0~v {print $0 > ".cicd/message-release.txt"; s=1; next}; (!($0~v) && $0~l) {s=0};' RS= v=$rgxversion l=$releaselinecontent ./packages/react/CHANGELOG.md
    # erase last line of file
    sed -i '' -e '$ d' .cicd/message-release.txt

    # write release message with line breaks
    awk '{printf "%s\\\n ",$0 > ".cicd/message-text.txt"} END {print ""}' .cicd/message-release.txt

    # update release message at json
    CHANGELOG_UPDATES=`cat .cicd/message-text.txt`
    sed -i '' "s|CHANGELOGMESSAGE|$CHANGELOG_UPDATES|g" .cicd/updated-message-teams.json

    # send message
    message=`cat .cicd/updated-message-teams.json`
    curl -H 'Content-Type: application/json' -d "$message" "$NATDS_TEAMS_RELEASE_WEBHOOK"

    # remove helper files
    rm -f .cicd/updated-message-teams.json
    rm -f .cicd/message-release.txt
    rm -f .cicd/message-text.txt

fi
