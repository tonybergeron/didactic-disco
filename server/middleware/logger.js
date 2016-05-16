'use strict';

var winston = require('winston');
var path = require('path');
var fs = require('fs');

winston.emitErrs = true;

let logDir = path.join(__dirname + '/../../logs');

if (!fs.existsSync(logDir)) {
  // Create the directory if it does not exist
  fs.mkdirSync(logDir);
}

let logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      name: 'debugger-console',
      handleExceptions: true,
      prettyPrint: true,
      silent: false,
      colorize: true
    }),
    new winston.transports.File({
      level: 'silly', // This is the highest log level so that everything will get logged
      filename: logDir + '/all-logs.log',
      name: 'silly-file',
      handleExceptions: false,
      json: true,
      colorize: false
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      name: 'file.error',
      filename: logDir + '/all-logs.log'
    })
  ],
  exitOnError: false
});

logger.logResponseBody = (req, res, next) => {
  let oldWrite = res.write;
  let oldEnd = res.end;

  var chunks = [];

  res.write = (chunk) => {
    chunks.push(chunk);

    oldWrite.apply(res, arguments);
  };

  res.end = (chunk) => {
    if (chunk) {
      chunks.push(chunk);
    }

    let body = Buffer.concat(chunks).toString('utf8');
    logger.info(req.path, body);

    oldEnd.apply(res, arguments);
  };

  next();
};

module.exports = logger;
module.exports.stream = {
  write: (message) => {
    logger.silly(message);
  }
};
