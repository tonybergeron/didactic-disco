'use strict'

var endpoints = require('../config/endpoints')
var authenticationMiddleware = require('../middleware/authentication')

var authorization = require('./controllers/authorization')
var users = require('./controllers/users')

module.exports = (app) => {
  /**
   * Authentication endpoints
   */
  app.post(endpoints.APIOPEN.login, authorization.postLogin)
  app.get(endpoints.APIOPEN.logout, authorization.getLogout)

  /**
   * -------------------------
   * Authorized Endpoints Only
   * Everything below this point will require authentication to access
   */
  app.all(endpoints.APISECURE.authRequiredPath, authenticationMiddleware.hasApiAccess)

  app.get(endpoints.APISECURE.users, users.fetchUsersList)
  app.get(endpoints.APISECURE.usersById, users.fetchUserById)
}
