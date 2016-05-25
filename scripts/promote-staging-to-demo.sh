#!/bin/bash

# Run from within the scripts folder as sudo (Sudo allows heroku scripts to operate correctly)
# sudo ./promote-staging-to-demo.sh

sh ./promote-setup.sh

# Heroku Pipelines promote from Staging to Production
# heroku plugins:install heroku-pipelines
if heroku pipelines:promote --app smrt-staging --to smrt-demo ; then
    echo "Success: Heroku promotion of smrt-staging to smrt-demo"
else
    echo "Failure: Heroku promotion of smrt-staging to smrt-demo"
fi

# Upload Build Files to S3
# Have awscli installed and configured with a user that has IAM Permissions of `AmazonS3FullAccess`
if aws s3 rm s3://smrtcloud-demo-build --recursive && aws s3 sync s3://smrtcloud-staging-build s3://smrtcloud-demo-build --acl public-read --cache-control "public, max-age=86400" ; then
    echo "Success: AWS S3 Deployment of smrtcloud-staging-build to smrtcloud-demo-build"
else
    echo "Failure: AWS S3 Deployment of smrtcloud-staging-build to smrtcloud-demo-build"
fi
