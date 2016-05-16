'use strict'

// var express = require('express')
var pkg = require('../../package.json')
var session = require('express-session')
var compression = require('compression')

var bodyParser = require('body-parser')
var MongoStore = require('connect-mongo')(session)
var path = require('path')
var secrets = require('./secrets')

var logger = require('../utils/logger')
var nodeEnv = process.env.NODE_ENV || 'production'

const ONE_DAY = 86400000 // Cache Static Content a maximum of 1 day in seconds

module.exports = (app, passport) => {
  // gzip all content for increased speed
  app.use(compression())

  // process.env.PORT lets Heroku add correct port within Heroku Environment
  app.set('port', (process.env.PORT || pkg.devConfig.port || 8001))

  // X-Powered-By header has no functional value.
  // Keeping it makes it easier for an attacker to build the site's profile
  // It can be removed safely
  app.disable('x-powered-by')

  // Helmet is also a great option to use.
  // http://expressjs.com/en/advanced/best-practice-security.html

  // Parse JSON and application/x-www-form-urlencoded
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  // Jade Views
  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'pug')

  /*
  let staticAssetsFilePath = path.join(__dirname, '../../', pkg.config.assetsDir)
  app.use(express.static(staticAssetsFilePath, {
    maxAge: ONE_DAY
  }))
  */

  // I am adding this here so that the Heroku deploy will work
  // Indicates the app is behind a front-facing proxy,
  // and to use the X-Forwarded-* headers to determine the connection and the IP address of the client.
  // NOTE: X-Forwarded-* headers are easily spoofed and the detected IP addresses are unreliable.
  // trust proxy is disabled by default.
  // When enabled, Express attempts to determine the IP address of the client connected through the front-facing proxy, or series of proxies.
  // The req.ips property, then, contains an array of IP addresses the client is connected through.
  // To enable it, use the values described in the trust proxy options table.
  // The trust proxy setting is implemented using the proxy-addr package. For more information, see its documentation.
  // loopback - 127.0.0.1/8, ::1/128
  app.set('trust proxy', 'loopback')

  // Create a session middleware with the given options
  // Note session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
  // Options: resave: forces the session to be saved back to the session store, even if the session was never
  //                  modified during the request. Depending on your store this may be necessary, but it can also
  //                  create race conditions where a client has two parallel requests to your server and changes made
  //                  to the session in one request may get overwritten when the other request ends, even if it made no
  //                  changes(this behavior also depends on what store you're using).
  //          saveUnitialized: Forces a session that is uninitialized to be saved to the store. A session is uninitialized when
  //                  it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage
  //                  usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with
  //                  race conditions where a client makes multiple parallel requests without a session
  //          secret: This is the secret used to sign the session ID cookie.
  //          name: The name of the session ID cookie to set in the response (and read from in the request).
  //          cookie: Please note that secure: true is a recommended option.
  //                  However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies.
  //                  If secure is set, and you access your site over HTTP, the cookie will not be set.
  let sess = {
    resave: true,
    saveUninitialized: false,
    secret: secrets.sessionSecret,
    proxy: true, // The "X-Forwarded-Proto" header will be used.
    name: 'sessionId',
    // Add HTTPOnly, Secure attributes on Session Cookie
    // If secure is set, and you access your site over HTTP, the cookie will not be set
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: ONE_DAY // 24 hours
    },
    store: new MongoStore({
      url: secrets.db,
      autoReconnect: true
    })
  }

  logger.info('--------------------------')
  logger.info('===> 🎬  Starting Server . . .')
  logger.info('===> 💈  Environment: ' + nodeEnv)
  logger.info('===> 📦  Build Files URL: ' + (nodeEnv === 'development' ? pkg.devConfig.buildAssets : process.env.BUILD_FILES_URL))
  if (nodeEnv === 'production') {
    logger.info('===> 🔐  Note: In order for authentication to work in production')
    logger.info('===>          you will need a secure HTTPS connection')
    // sess.cookie.domain = 'domain.com' // Domain to share cookies between
    sess.cookie.secure = true // Serve secure cookies
  }

  // Use the Session
  app.use(session(sess))

  // Initialize the Passport Strategy and Session
  app.use(passport.initialize())
  app.use(passport.session())
}
