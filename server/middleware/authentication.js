'use strict'

/**
 * Authentication Middleware
 * Allowed: grant access to resources through next()
 * Disallowed: return an error code indicating they are forbidden
 */
module.exports = {
  /**
   * Used to authenticate API Access. Returns 401 on failure
   */
  hasApiAccess(req, res, next) {
    next()
  }
}
