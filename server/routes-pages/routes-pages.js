'use strict'

var pkg = require('../../package.json')
var viewsConfig = require('../config/views')
var pagesConfig = require('../config/pages')
// var logger = require('../utils/logger')

module.exports = (app) => {
  /**
   * LOGIN PAGE ROUTE
   */
  app.get('/', (req, res) => {
    res.render(viewsConfig.dashboard, {
      version: pkg.version
    })
  })
}
