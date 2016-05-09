'use strict'

var morgan = require('morgan')
var logger = require('../utils/logger')

// For emojis in console outs http://getemoji.com/
module.exports = (app) => {
  // https://github.com/expressjs/morgan
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  } else {
    app.use(morgan('combined', {
      'stream': logger.stream
    }))
  }

  return logger
}
