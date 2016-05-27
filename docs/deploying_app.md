# Deploying Codebase

## Table of Contents
1. [Introduction](#introduction)
1. [Uploading](#uploading)
	1. 	[Local Upload via Script](#local-script-upload)
	1. 	[CI Upload via Script](#ci-script-upload)

## <a name="introduction"></a> Introduction
Scripts are provided that will

* Clean
	* Clean any local folders from previous builds
* Build/Bundle
	* Build/Bundle Client App files through the use of Webpack
	* Bundle the Server App files through the use of copying specific Server files
* Deploy
	* Deploy Client App files to AWS S3 through the use of the AWS CLI
	* Deploy Server App files to Heroku through the use committing file changes to the master branch of the Heroku App

## <a name="uploading"></a> Uploading

### <a name="local-script-upload"></a> Local Upload via Script

*Note: Be sure to have your local environment setup to be able to access and use the AWS CLI and Heroku Toolbelt.  Instructions available at [Local DevOps Setup]*

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

**Example script commands on a CI Server to provide this functionality**

~~~~~
npm --production=false install
npm run lint
npm run deploy
~~~~~

[Local DevOps Setup]: local_devops_setup.md
