'use strict'

var pkg = require('../package.json')
var express = require('express')
var passport = require('passport')
var app = express()

if (!pkg.config) {
  /*eslint-disable */
  console.error('❗  Please setup config in package.json!');
  process.exit(1);
  /*eslint-enable */
}

// Setup Logging
let logger = require('./config/logging')(app)

// Setup DB Connection
require('./config/mongoose')

// Setup Authentication
// require('./config/passport')(app, passport);

// Run Express
require('./config/express')(app, passport)

// Attach API Routes
require('./routes-api/routes-api')(app, passport)

// Attach Page Routes
require('./routes-pages/routes-pages')(app, passport)

// Start Server
let server = app.listen(app.get('port'), () => {
  var port = server.address().port
  logger.info('===> 👂  Listening at: %s', port)
})

module.exports = server
