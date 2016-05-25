#!/bin/bash

# Custom Script
# Upload Build Files to S3
# Installs awscli, deletes the existing env bucket contents, syncs the build folder with the env bucket with appropriate cache controls
# pip install awscli

if [ $1 ]; then
  echo "Source Folder $1"
else
  echo "Error: Source Folder not provided"
  exit 1
fi

if [ $2 ]; then
  echo "Bucket: $2"
else
  echo "Error: Bucket Not Provided"
  exit 1
fi

pip install awscli
aws s3 rm s3://$2 --recursive
aws s3 sync $1 s3://$2 --acl public-read --cache-control "public, max-age=86400"
