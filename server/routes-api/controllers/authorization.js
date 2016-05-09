'use strict'

var httpStatusCodes = require('../../enums/http-status-codes')

module.exports = {

  /**
   * POST /login
   */
  postLogin(req, res) {
    return res.status(httpStatusCodes.SUCCESS).send()
  },

  /**
   * Logout from the application
   */
  getLogout(req, res) {
    res.status(httpStatusCodes.SUCCESS).send()
  }

}
