#!/bin/bash

# Run from within the scripts folder as sudo (Sudo allows heroku scripts to operate correctly)
# sudo ./promote-staging-to-prod.sh

sh ./promote-setup.sh

# Heroku Pipelines promote from Staging to Production
# heroku plugins:install heroku-pipelines
if heroku pipelines:promote --app app-staging --to app-prod ; then
    echo "Success: Heroku promotion of app-staging to app-prod"
else
    echo "Failure: Heroku promotion of app-staging to app-prod"
fi

# Upload Build Files to S3
# Have awscli installed and configured with a user that has IAM Permissions of `AmazonS3FullAccess`
if aws s3 rm s3://app-prod-build --recursive && aws s3 sync s3://app-staging-build s3://app-prod-build --acl public-read --cache-control "public, max-age=86400" ; then
    echo "Success: AWS S3 Deployment of app-staging-build to app-prod-build"
else
    echo "Failure: AWS S3 Deployment of app-staging-build to app-prod-build"
fi
