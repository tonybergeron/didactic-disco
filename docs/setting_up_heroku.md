# Setting Up Heroku

## Table of Contents
1. [Introduction](#introduction)
1. [App Setup](#setup)
1. [Uploading](#uploading)
1. [Environment Variables](#environment-variables)
1. [MongoDB](#mongo-db)
1. [Piplines](#piplines)

## <a name="introduction"></a> Introduction
Heroku is Cloud Application Platform which we will be using to host our Web App, more specifically the Server side portion of our Web App

## <a name="setup"></a> Heroku Application Setup

* Go To: [https://dashboard.heroku.com/](https://dashboard.heroku.com/)
* Create New App
	* Give it a name if you want, it's your life

## <a name="uploading"></a> Uploading

See the [Deploying App] instructions

## <a name="environment-variables"></a> Environment Variables
Environment Variables in this example are specifically used to provide the URL from which the Client Static Assets are located and proxied to through the express server.  

Later, these environment variables can be expanded to further differentiate environment permissions or functionality

### Instructions to setup the BUILD_FILES_URL Environment Variable

* Go to your Heroku Application
* Select the `Settings` tab
* Click `Reveal Config Vars`
* Enter the KEY/VALUE of our BUILD_FILES_URL
	* KEY: `BUILD_FILES_URL`
	* VALUE: `https://<bucket-name>.s3.amazonaws.com`

## <a name="mongo-db"></a> MongoDB
A MongoDB Server is expected for this example for session storage and further persistence.

This can be riped out and replaced as needed.  It exists to serve as an example.

** Setup mLab **

* Go to your Heroku App
* Click on the `Resources` Tab
* Search Add-ons for 'mlab'
* Select the `Sandbox - Free` item 
* **Note: This will require a credit card be attached to the Heroku Account**
	* If you don't need any persistence ever, just remove the `express-session` functionality and `mongo`/`mongoose` dependencies	

## <a name="piplines"></a> Piplines
Heroku Pipelines allows Heroku apps to be linked together into deployment stages.

More information at [https://devcenter.heroku.com/articles/pipelines](https://devcenter.heroku.com/articles/pipelines)

### Pipelines Promotion Script Template
There is already a template script that can be utilized to promote the Client files from one AWS bucket to another, and promote a Heroku Slug from one Heroku app to another

This is very handy if you want to promote the exact code from UAT to Production and do not want to perform a rebuild of your code. 

Example Script is located at `scripts/promote-staging-to-prod.sh`

[Deploying App]:(docs/deploying_app.md)