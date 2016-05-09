'use strict'

var pkg = require('../../package.json')
var viewsConfig = require('../config/views')
var pagesConfig = require('../config/pages')
// var logger = require('../utils/logger')

var DEBUG = process.env.NODE_ENV === 'development'

// URL To provide the Build Files from
var buildFilesUrl = DEBUG ? pkg.devConfig.buildAssets : process.env.BUILD_FILES_URL

if (!buildFilesUrl) {
  /*eslint-disable */
  console.error('❗  ERROR! PLEASE SETUP THE BUILD_FILES_URL ENVIRONMENT VARIABLE')
  process.exit(1)
  /*eslint-enable */
}

module.exports = (app) => {
  /**
   * LOGIN PAGE ROUTE
   */
  app.get(pagesConfig.dashboard.url, (req, res) => {
    res.render(viewsConfig.dashboard, { buildFilesUrl })
  })
}
