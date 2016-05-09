'use strict'

var Users = require('../../models/user')
var httpStatusCodes = require('../../enums/http-status-codes')

module.exports = {
  /**
   * Fetches a List of Values
   */
  fetchUsersList(req, res) {
    Users.listUsers()
      .then((usersList)=> {
        return res.json(usersList)
      })
      .catch((err) => {
        // Handle Error
        return res.status(httpStatusCodes.SERVER_ERROR).send(err)
      })
  },

  /**
   * Fetches a User by Id
   */
  fetchUserById(req, res) {
    var userId = req.params.userId

    Users.findUserById(userId)
      .then((user) => {
        if (!user) {
          return res.status(httpStatusCodes.NOT_FOUND).send()
        }
        return res.json(user)
      })
      .catch((err) => {
        // Handle Error
        return res.status(httpStatusCodes.SERVER_ERROR).send(err)
      })
  }
}
