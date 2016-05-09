# TODO Update to check heroku toolbelt and aws
# ~/.aws/config should exist

# Heroku Pipelines promote from Staging to Production
# heroku plugins:install heroku-pipelines
heroku pipelines:promote --app app-staging --to app-production

# Upload Build Files to S3
# Have awscli installed and configured with a user that has IAM Permissions of `AmazonS3FullAccess`
aws s3 rm s3://production-build-files-bucket --recursive
aws s3 sync s3://staging-build-files-bucket s3://production-build-files-bucket --acl public-read --cache-control "public, max-age=86400"
