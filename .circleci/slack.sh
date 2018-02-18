#!/bin/bash

STAGE=$(echo $CIRCLE_STAGE | grep 'production' | wc -l)
GITHUB_REPOSITORY="https://github.com/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}"
TEXT=$(bash .circleci/git-commits.sh $CIRCLE_SHA1 $GITHUB_REPOSITORY)

if [ $STAGE -eq 0 ]
then
  STAGE=Staging
else
  STAGE=Production
fi

curl -X POST \
  -H "Content-Type: application/json" \
  --url $WEBHOOK_SLACK \
  -d @- <<EOF
  {
    "color": "#00D000",
    "username": "Circle CI Bot",
    "icon_url": "https://a.slack-edge.com/41b0a/img/plugins/circleci/service_48.png",
    "channel": "taringa",
    "pretext": "$TEXT",
    "fields": [
      {
        "title": "New ${CIRCLE_PROJECT_REPONAME^} deploy on $STAGE",
        "value": "See on <https://$APP_NAME.herokuapp.com|Heroku>\nCompare on <$CIRCLE_COMPARE_URL|GitHub>"
      }
    ]
  }
EOF
