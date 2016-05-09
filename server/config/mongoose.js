'use strict'

var mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment')
var secrets = require('./secrets')
var logger = require('../middleware/logger')
var http = require('http')
var fs = require('fs')
var modelsDirectoryRelative = '../models'
var normalizedModelsPath = require('path').join(__dirname, modelsDirectoryRelative)

http.globalAgent.maxSockets = Infinity

let connect = () => {
  mongoose.connect(secrets.db, {
    server: {
      auto_reconnect: true
    }
  })
}

let db = mongoose.connection
autoIncrement.initialize(db) // Initialize connection when it is available, use it

db.on('connecting', () => {
  logger.info('connecting to MongoDB...')
})
db.on('error', (error) => {
  logger.warn('Error in MongoDb connection: ' + error)
  mongoose.disconnect()
})
db.on('connected', () => {
  fs.readdirSync(normalizedModelsPath).forEach((file) => {
    if (fs.statSync(normalizedModelsPath + '/' + file).isFile()) {
      require(modelsDirectoryRelative + '/' + file)
    }
  })
  logger.info('MongoDB connected!')
})
db.once('open', () => {
  logger.info('MongoDB connection opened!')
})
db.on('reconnected', () => {
  logger.info('MongoDB reconnected!')
})
db.on('disconnected', () => {
  logger.warn('MongoDB disconnected! Trying again in 5 seconds')
  setTimeout(() => {
    connect()
  }, 5000)
})

connect()
