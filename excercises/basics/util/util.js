const path = require('path')
const log4js = require('log4js')

const http = require('axios').create({
  baseURL: 'http://localhost:3000',
  validateStatus: () => true
})

const appenders = { console: { type: 'console' } }

log4js.configure({
  appenders: appenders,
  categories: { default: { appenders: Object.keys(appenders), level: 'debug' } }
})

const getLogger = fileName => log4js.getLogger(path.basename(fileName).replace('.js', ''))

module.exports = { getLogger, http }
