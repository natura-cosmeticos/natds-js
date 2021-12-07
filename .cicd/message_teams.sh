#!/bin/bash

 # create new file to edit
 cp ./message_teams.json ./updated_message_teams.json

 # get and update version at message
 NEW_VERSION=$(cat package.json \
   | grep version \
   | head -1 \
   | awk -F: '{ print $2 }' \
   | sed 's/[",]//g')

 echo "New version: $NEW_VERSION"

 sed -i '' "s/VERSIONVALUE/$NEW_VERSION/g" ./updated_message_teams.json

 releaselinecontent='https://github.com/natura-cosmeticos/natds-js/compare'
 major=`echo $NEW_VERSION | cut -d. -f1`
 minor=`echo $NEW_VERSION | cut -d. -f2`
 patch=`echo $NEW_VERSION | cut -d. -f3`
 rgxversion="$major\.$minor\.$patch" # regex for new version

 # save last version output to file
 awk 's{print $0 > "./message_release.txt"}; $0~v {print $0 > "./message_release.txt"; s=1; next}; (!($0~v) && $0~l) {s=0};' RS= v=$rgxversion l=$releaselinecontent CHANGELOG.md
 # erase last line of file
 sed -i '' -e '$ d' ./message_release.txt

 # write release message with line breaks
 awk '{printf "%s\\\n ",$0 > "./message_text.txt"} END {print ""}' ./message_release.txt

 # update release message at json
 CHANGELOG_UPDATES=`cat ./message_text.txt`
 sed -i '' "s|CHANGELOGMESSAGE|$CHANGELOG_UPDATES|g" ./updated_message_teams.json

 # send message
 message=`cat ./updated_message_teams.json`
 curl -H 'Content-Type: application/json' -d "$message" "$TEAMS_RELEASE_WEBHOOK"

 # remove helper files
 rm ./updated_message_teams.json
 rm ./message_release.txt
 rm ./message_text.txt
