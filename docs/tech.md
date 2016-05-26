# Technologies Overview

## Table of Contents
0. [Introduction](#introduction)
0. [ES6](#es6)
0. [Documentation](#documentation)
	0. [JSDoc](#jsdoc)
0. [Frontend Technologies](#frontend-technologies)
	0. [Webpack](#webpack)
	0. [React](#react)
0. [Backend Technologies](#backend-technologies)
	0. [Express](#express)
	0. [express-http-proxy](#express-http-proxy)
	0. [Mongoose](#mongoose)
	0. [MongoDB](#mongodb)
	0. [Logging](#logging)
	0. [Pug](#pug)
0. [Utilities](#utilities)
	0. [q](#q)
	0. [Lodash](#lodash)
	0. [Moment](#moment)
	0. [Nodemon](#nodemon)
	0. [Forever](#forever)
	0. [webpack-dev-server](#webpack-dev-server)

## <a name="introduction"></a> Introduction
This is a helpful list of resources to onboard new developers to the technologies used within the application.

## <a name="es6"></a> ES6
Everything in the app is developed being able to support ES6 syntax and structure. Here [https://github.com/lukehoban/es6features](https://github.com/lukehoban/es6features) is a helpful introduction to the expanded functionality ES6 brings to JavaScriptBabel [https://babeljs.io/](https://babeljs.io/) is used as the compiler to transform the front-end application code into browser supported methods.
Node 5.x supports ES6 so no compilation is necessary. [https://nodejs.org/en/docs/es6/](https://nodejs.org/en/docs/es6/) for more information


## <a name="documentation"></a> Documentation### <a name="jsdoc"></a> JSDoc￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼Commenting format for methods
￼[￼http://usejsdoc.org/](http://usejsdoc.org/)
## <a name="frontend-technologies"></a> Frontend Technologies### <a name="webpack"></a> WebpackWebpack is the module bundler for the front-end application static files. Grunt and Gulp are similar technologies.
Don't worry about not understanding this fully, look at the current implementation can't you should get a feel for what every part is trying to do. Don't worry about knowing everything about it right away.
[http://webpack.github.io/docs/](http://webpack.github.io/docs/)### <a name="react"></a> ReactLibrary for constructing our user facing components.
[https://facebook.github.io/react/](https://facebook.github.io/react/)## <a name="backend-technologies"></a> Backend Technologies

### <a name="express"></a> Express
The web framework serving data to the user through a RESTful HTTP infrastructure.
[http://expressjs.com/en/api.html](http://expressjs.com/en/api.html)### <a name="express-http-proxy"></a> express-http-proxyProxy requests to new location[https://github.com/villadora/express-http-proxy](https://github.com/villadora/express-http-proxy)

### <a name="mongoose"></a> Mongoose
Library for Modeling MongoDB[http://mongoosejs.com/](http://mongoosejs.com/)### <a name="mongodb"></a> MongoDBDatabase

[https://www.mongodb.com/](https://www.mongodb.com/)### <a name="logging"></a> Logging

￼Logging
[https://github.com/winstonjs/winston](https://github.com/winstonjs/winston)

[https://github.com/expressjs/morgan](https://github.com/expressjs/morgan)
### <a name="pug"></a> PugTemplating (originally Jade)[https://github.com/jadejs/jade](https://github.com/jadejs/jade)
## <a name="utilities"></a> UtilitiesVarious utilites used in the application
### <a name="q"></a> qPromise Library
[https://github.com/kriskowal/q](https://github.com/kriskowal/q)
￼[More info on promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)### <a name="lodash"></a> Lodash
The Utility of Utilities. Helpful methods for common tasks[https://lodash.com/docs](https://lodash.com/docs)### <a name="moment"></a> MomentDate and Time Library of extremely helpful methods.
[momentjs.com/docs/](momentjs.com/docs/)
[http://momentjs.com/timezone/](http://momentjs.com/timezone/)### <a name="nodemon"></a> NodemonDevelopment server restart tool[https://github.com/remy/nodemon](https://github.com/remy/nodemon)
### <a name="forever"></a> ForeverProduction server restart tool[https://github.com/foreverjs/forever](https://github.com/foreverjs/forever)### <a name="webpack-dev-server"></a> Webpack Dev Server
Enables rapid local development by developers[https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)