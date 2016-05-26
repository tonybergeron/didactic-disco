# Serving Static Files from S3

## Table of Contents
1. [Introduction](#introduction)
1. [Bucket Setup](#bucket-setup)
	1. 	[CORS](#cors)
1. 	[Accessing Files](#access)

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
	0. Oregon is always a solid choice.  Try to stay consistent with this
	0. Gotcha Note: If you have other AWS services restricted to specific regions, be sure to have all of these services within the same Region


This bucket must be at the root level because of how the folder structure is organized and served to clients.  This also makes it easier to tear down and rebuild or buckets

### <a name="cors"></a> CORS
Browsers restrict cross-origin HTTP requests across domains unless explicitly allowed.  We need to setup our S3 Bucket to allow other domains to access our contents.

**To Update your Bucket's CORS:**

`Click Bucket > Properties > Permissions > Edit CORS Configuration > Copy and Paste the below code`

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
