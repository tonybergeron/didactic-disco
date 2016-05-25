'use strict'

/** Important **/
/** You should not be committing this file anywhere public **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! A! PUBLIC! REPO! **/

var pkg = require('../../package.json')

module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  db: process.env.MONGOHQ_URL || process.env.MONGODB_URI || pkg.devConfig.dbLocation,

  // Session secret
  sessionSecret: process.env.SESSION_SECRET || 'the helicopter goes soi soi soi'
}
