(async () => {
  const express = require('express')
  const app = express()
  const swaggerUi = require('swagger-ui-express')
  const spec = require('../doc/app.doc.swagger.conf.js')

  /** @type {Array<User>} */
  const data = require('../../util/data')

  class ClientError extends Error {
    constructor (error, statusCode = 400) {
      super()
      this.error = error
      this.statusCode = statusCode
    }
  }

  app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(spec))

  app.get('/api/users', (req, res, next) => {
    res.send(data)
  })

  app.get('/api/users/:id', (req, res, next) => {
    const user = data.find(u => u.id === req.params.id)
    if (!user) {
      return next(new ClientError('User not found', 404))
    }

    return res.send(user)
  })

  app.use((err, req, res, next) => {
    if (err.constructor === ClientError) {
      return res.status(err.statusCode).send(err)
    }

    return res.status(500).send({ error: err.message || 'Internal server error', statusCode: 500 })
  })

  app.listen(3000)
  console.log('Server started.')
})()
