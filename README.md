# S3, Heroku, and Cloudfront Inspirational Boilerplate

## Table of Contents
0. [Introduction](#introduction)
0. [Intended Use Cases](#use-cases)
0. [Quick Setup](#quick-setup)
0. [Documentation](#documentation)
0. [Authors](#authors)


## <a name="introduction"></a> Introduction
This is meant to be a quickstart/inspirational boiler plate to get your client application and server application hosted on S3 and Heroku.  

With a few tweaks this starting point can be enhanced to accomodate:

0. Multiple Single Page Application entry points
0. Bootstrap or other client side vendor libraries
0. Koa instead of Express 4.0
0. PostgreSQL instead of Mongo
0. Multiple environments

## <a name="use-cases"></a> Intended Use Cases
Not every solution requires this much

** What this solution is good for: **

* A single Git repo
* Full stack development
* A project with little to no DevOps 
* A set of defined environments (example: dev, uat, demo, prod)

** What this solution is not good for: **

* No API or Server side code necessary
	* Just have a client app? Use [API Gateway](https://aws.amazon.com/api-gateway/)
* Massive and Complex environment architectures


## <a name="quick-setup"></a> Quick Setup
0. [Install Node]
	0. [Node.js] information
	0. [npm] is Node's companion package manager
0. [Install Git]
0. Install [Mongoose] and setup Local DB
	* `npm install mongodb`
0. Clone the repo and checkout develop
	* `git clone https://github.com/tonybergeron/didactic-disco.git`
0. Download/Update Dependencies
	* `npm install`
0. Start Mongo Server ([mongod])
	* `mongod`
0. Build and serve application locally with npm
	* `npm start`
0. Navigate to [http://localhost:3001](http://localhost:3001)


## <a name="documentation"></a> Documentation
Here is some more documentation that will help guide you through how each area of the devops process is setup and what it is doing. 

0. [Webpack Rundown](docs/webpack.md)
0. [Local DevOps Setup](docs/local_devops_setup.md)
0. [Serving Static Files from S3](docs/serving_static_files_from_s3.md)
0. [Setting Up a Domain with AWS Cloudfront](docs/setting_up_domain_with_aws_cloudfront.md)
0. [Setting Up Heroku](docs/setting_up_heroku.md)
0. [Deploying App](docs/deploying_app.md) 
0. [Tech](docs/tech.md) 


## <a name="authors"></a> Authors
0. [![Tony Bergeron](https://avatars1.githubusercontent.com/u/3194800?s=100 "Tony Bergeron")](https://github.com/tonybergeron) [Tony Bergeron](https://github.com/tonybergeron)
0. [![Stephen Melnicki](https://avatars0.githubusercontent.com/u/1424885?s=100 "Stephen Melnicki")](https://github.com/smelnicki) [Stephen Melnicki](https://github.com/smelnicki)


[Install Node]: https://github.com/joyent/node/wiki/installation
[Node.js]: https://nodejs.org
[npm]: https://www.npmjs.com
[Mongoose]: http://mongoosejs.com/
[mongod]: https://docs.mongodb.com/manual/reference/program/mongod/
[Install Git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git