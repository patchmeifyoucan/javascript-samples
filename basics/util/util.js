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

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

const line = () => {
  console.log()
}

const section = (name, c = '-') => {
  if (!c) {
    throw new Error('Section needs a name!')
  }

  console.log(`\n\n${name} ${c.repeat(150 - name.length)}`)
}

const getLogger = fileName => log4js.getLogger(path.basename(fileName).replace('.js', ''))

module.exports = { getLogger, http, line, section, wait }
