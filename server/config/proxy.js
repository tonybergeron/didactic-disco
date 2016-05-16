'use strict';

var pkg = require('../../package.json');
var proxy = require('express-http-proxy');

var nodeEnv = process.env.NODE_ENV || 'production';
var buildFilesProxy = nodeEnv === 'development' ? pkg.devConfig.buildProxy : process.env.BUILD_FILES_URL;

if (!buildFilesProxy) {
  /*eslint-disable */
  console.error('❗  ERROR! PLEASE SETUP THE BUILD_FILES_URL ENVIRONMENT VARIABLE');
  process.exit(1);
  /*eslint-enable */
}

module.exports = (app) => {
  /**
   * Proxy all GET requests from /assets to where the build files are located
   * request:         assets/common.bundle.js
   * proxy through:   https://smrtcloud.com/assets/common.bundle.js
   * to:              https://smrtcloud-production-build.s3.amazonaws.com/common.0.0.4.bundle.js
   */
  app.use('/assets', proxy(buildFilesProxy, {
    filter: (req) => {
      return req.method === 'GET';
    },
    forwardPath: (req) => {
      console.log(buildFilesProxy);
      console.log(require('url').parse(req.url).path);
      return require('url').parse(req.url).path;
    }
  }));

  /**
   * Proxy all GET requests from /static to where the static build files are located
   * request:         static/fonts/glyphicons-halflings-regular.woff2
   * proxy through:   https://smrtcloud.com/static/fonts/glyphicons-halflings-regular.woff2
   * to:              https://smrtcloud-production-build.s3.amazonaws.com/static/fonts/glyphicons-halflings-regular.woff2
   */
   /*
  app.use('/static', proxy(buildFilesUrl, {
    filter: (req) => {
      return req.method === 'GET';
    },
    forwardPath: (req) => {
      return '/static' + require('url').parse(req.url).path;
    }
  }));
  */
};
