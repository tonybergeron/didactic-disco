#!/bin/bash

# If you are unable to run this script, you may need to change the provlieges.  Try `chmod +x FILENAME`

# Check for ~/.aws/config existence and fail if not provided
if [ -f ~/.aws/config ]; then
  echo "Check Good: AWS Config available"
else
  echo "Error: ~/.aws/config NOT FOUND, exiting"
  exit 1
fi

# Check for heroku setup
if [ "$(type -t heroku)" = "file" ] ; then
  echo "Check Good: Heroku exists"
else
  echo "Error: heroku does not exist"
  exit 1
fi
