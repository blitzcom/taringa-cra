#!/bin/bash

STAGE=$(echo $CIRCLE_STAGE | grep 'production' | wc -l)

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
    "fields": [
      {
        "title": "New ${CIRCLE_PROJECT_REPONAME^} deploy on $STAGE",
        "value": "See on <https://$APP_NAME.herokuapp.com|Heroku>\nCompare on <$CIRCLE_COMPARE_URL|GitHub>"
      }
    ]
  }
EOF
