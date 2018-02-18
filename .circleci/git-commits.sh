#!/bin/bash

COMMITS=$(git log --oneline $1^..$1)
COMMIT_HISTORY=""

while read -r line; do
  COMMIT_SHA=${line:0:7}
  COMMIT_TITLE=${line:7}
  COMMIT_HISTORY+="<$2/commit/$COMMIT_SHA|$COMMIT_SHA>$COMMIT_TITLE\n"
done <<< "$COMMITS"

COMMIT_HISTORY=${COMMIT_HISTORY::-2}

echo $COMMIT_HISTORY
