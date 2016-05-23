'use strict'

var mongoose = require('mongoose')
var _ = require('lodash')

/**
 * User Schema
 */
var UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  }
}, {
  collection: 'examples'
})

/**
 * Virtual Properties
 */
UsersSchema.virtual('fullName').get(function getFullName() {
  const fullNameTpl = _.template('${firstName} ${lastName}')
  return fullNameTpl({
    firstName: this.firstName,
    lastName: this.lastName
  })
})


/**
 * Save Hook
 */
UsersSchema.pre('save', function save(next) {
  next()
})

/**
 * Methods that are available on the model when retrieved from Mongoose
 */
UsersSchema.methods = {
  fullNameUpperCase() {
    return _.toUpperCase(this.fullName)
  }
}


/**
 * Static Methods that are available against the Collection within mongoose
 */
UsersSchema.statics = {
  /**
   * List the Users
   */
  listUsers(filters) {
    return this.find(filters)
      .sort('lastName')
      .lean()
      .exec()
  },

  /**
   * Find User by Id
   */
  findUserById(userId) {
    return this.findOne({
      _id: userId
    })
      .lean()
      .exec()
  }
}

module.exports = mongoose.model('User', UsersSchema)
