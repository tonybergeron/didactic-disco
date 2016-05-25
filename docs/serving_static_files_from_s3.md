# Serving Static Files from S3

## Table of Contents
1. [Introduction](#introduction)
1. [Bucket Setup](#bucket-setup)
	1. 	[CORS](#cors)
1. 	[Accessing Files](#access)
1. [Uploading](#uploading)
	1. 	[Local Upload via Script](#local-script-upload)
	1. 	[CI Upload via Script](#ci-script-upload)

## <a name="introduction"></a> Introduction
Serving static files has an enormous amount of advantages and is very easy to setup

0. Cost: it is very cost effective to store you static files on S3
1. Always Available: S3 is basically acting as a CDN for your application's static files
2. HTTPS: HTTPS connections required to and from AWS S3 in this manner
3. Deploying is a breeze: 2 lines and the entire bucket is torn down and rebuilt

## <a name="bucket-setup"></a> Bucket Setup
Create a bucket at the root level at [https://console.aws.amazon.com/s3/home](https://console.aws.amazon.com/s3/home?)

0. Create Bucket
0. Name the Bucket (alphanumberic and dashes only)
	0. Example: `bucket-name-dev-build`
0. Select a Region
	0. Oregon is always a solid choice.  Try to stay consitent with this
	0. Gotcha Note: If you have other AWS services restricted to specific regions, be sure to have all of these services within the same Region


This bucket must be at the root level because of how the folder structure is organized and served to clients.  This also makes it easier to tear down and rebuild or buckets

### <a name="cors"></a> CORS
Browsers restrict cross-origin HTTP requests across domains unless explicitly allowed.  We need to setup our S3 Bucket to allow other domains to acces our contents.

`**To Update your Bucket's CORS**: Click Bucket > Properties > Permissions > Edit CORS Configuration > Copy and Paste the below code`

~~~~
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
  </CORSRule>
</CORSConfiguration> 
~~~~

These CORS properties can be expanded on to allow only specific domains to be allowed to un-restricted


More information on [CORS]


## <a name="access"></a> Accessing Files
Upload a test file (through the 'Actions' option).  If things are setup correctly you should be able to access your file at:

0. `https://<bucket-name>.s3.amazonaws.com/<testfile.extention>`

A fully formed url might look like:

0. [https://its-doge-oclock-somewhere-dev-build.s3.amazonaws.com/app-0.0.1.bundle.js](https://its-doge-oclock-somewhere-dev-build.s3.amazonaws.com/app-0.0.1.bundle.js)


## <a name="uploading"></a> Uploading
You can manually upload items to these buckets via the `Actions` that are available to the Bucket in the browser. 

However, this becomes very tedious. Below are a few examples of how we can leverage scripts to do this for us

### <a name="local-script-upload"></a> Local Upload via Script

Note: Be sure to have your local environment setup to be able to access and use the AWS CLI. Instructions available at [Local DevOps Setup]

As long as you are on the right branch you want to upload from, and you have all of your dependencies up to date, you will only need to run one command:

0. `npm run deploy`

### <a name="ci-script-upload"></a> CI Upload via Script

When you begin to use a CI (Continuous Integration) server, you will want to have these same scripts run from there. 

There are a few simple steps that you will need to consider when setting this up.

0. Setup your Environment Variables
	1. Ensure your NODE_ENV is `production` unless otherwise needed to be something else
0. When a build is triggered, be sure to run the npm install with production mode disabled
	1. `npm --production=false install`
	0. This is needed to also install the dev dependencies needed to operate our linting, tests, building, and deploying
	
A solid example in script form that a CI server will need to do to deploy would be

~~~~~
npm --production=false install
npm run lint
npm run deploy
~~~~~

[CORS]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
[Local DevOps Setup]:(docs/local_devops_setup.md)
