#!/bin/bash

set -ev

if [ "${TRAVIS_PULL_REQUEST}" = "false" ]
then
  docker build -t apinf/platform:$DOCKER_TAG .
  docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
  docker push apinf/platform:$DOCKER_TAG
else
  echo "Do not build the docker image from a PULL REQUEST, ok?"
fi
