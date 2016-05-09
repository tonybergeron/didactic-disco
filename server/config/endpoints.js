'use strict'

module.exports = {
  // Publically available endpoints that do not require authentication to access.
  APIOPEN: {
    login: '/api/login',
    logout: '/api/logout'
  },

  // Secure Endpoints that require authorization to access
  APISECURE: {
    authRequiredPath: '/api/*',
    users: '/api/users',
    userById: '/api/users/:userId'
  }
}
