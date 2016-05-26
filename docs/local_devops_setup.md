# Local DevOps Setup

## Table of Contents
1. [Introduction](#introduction)
2. [AWS CLI](#aws-cli)
3. [Heroku](#heroku)

## <a name="introduction"></a> Introduction
Setting up your local machine to have the ability to deploy to AWS and Heroku requires a small amount of setup first. 

0. AWS CLI Credentials Setup
1. Heroku Toolbest Installation and Login

## <a name="aws-cli"></a> AWS CLI
The AWS CLI methods are powerful and robust.  In order to take full advantage

### <a name="aws-cli"></a> AWS IAM
It is very easy to setup access tokens with limited AWS permissions

0. Go to: [https://console.aws.amazon.com/iam](https://console.aws.amazon.com/iam)
1. Click 'Users'
2. Create New Users
3. Enter User Name(s)
	4. Give these descriptive names to what duties they are performing
	0. Example: codeship-dev-s3-deployment, codeship-prod-s3-deployment, tonyb
0. Download/Copy the `AWS Access Key ID` and `AWS Secret Access Key` for these users
	1. These values will be used later when setting up the AWS CLI Configuration

A more robust example might include creating roles and groups, then applying users to those groups given those roles.  Go wild with this setup however you see fit.

Given how easy it is to manage this stuff, create a new user, delete old ones, we can just stick with creating individual users for now. 


### <a name="aws-cli"></a> AWS CLI Configuration

**Installation**

* [http://docs.aws.amazon.com/cli/latest/userguide/installing.html](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* `sudo pip install awscli`
	* [http://docs.aws.amazon.com/cli/latest/userguide/installing.html#install-with-pip](http://docs.aws.amazon.com/cli/latest/userguide/installing.html#install-with-pip)

**Setup Flow**

* [http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
* Run `aws configure`

	~~~~
	$ aws configure
	AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
	AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
	Default region name [None]: us-west-2
	Default output format [None]: ENTER
	~~~~

## <a name="heroku-toolbelt"></a> Heroku Toolbelt
The Heroku Toolbelt gives command line access to the heroku application your are authenticated to administrate.

* Download Heroku Toolbelt
	* [https://toolbelt.heroku.com/](https://toolbelt.heroku.com/) 
* Install Heroku Toolbelt
* Login
	* `heroku login`

		~~~~
		$ heroku login
		Enter your Heroku credentials.
		Email: adam@example.com
		Password (typing will be hidden):
		Authentication successful.
		~~~~
* Add your Public Key to Heroku
	* `heroku keys:add`
	


