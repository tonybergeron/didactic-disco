'use strict'

var pkg = require('../../package.json')
var nodeEnv = process.env.NODE_ENV || 'production'

module.exports = {
  getBuildProxyUrl: () => {
    return nodeEnv === 'development' ? pkg.devConfig.buildProxy : process.env.BUILD_FILES_URL
  }
}
