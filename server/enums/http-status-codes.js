'use strict'

/**
 * HTTP Status Codes to be utilized throughout the server side of the application
 */
module.exports = {
  UNKNOWN: -1,
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TEAPOT: 418,
  EXPIRED: 419,
  SERVER_ERROR: 422,
  SERVERSIDE_ERROR: 500
}
