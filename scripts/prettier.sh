#!/bin/bash

if [[ $# -eq 0 ]] ; then
  echo 'Missing file path (./src/...)'
  exit -1
fi

node_modules/.bin/prettier $1 | git diff --no-index $1 -
