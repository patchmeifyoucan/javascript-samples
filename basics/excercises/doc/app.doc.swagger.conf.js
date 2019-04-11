const paths = require('./app.doc.paths')
const definitions = require('./app.doc.definitions')

const conf = {
  openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
  definition: {
    info: {
      title: 'Fake person database API',
      version: '1.0.0'
    }
  },
  paths: {
    ...paths
  },
  definitions: {
    ...definitions
  }
}

module.exports = conf
