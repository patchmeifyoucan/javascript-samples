(async () => {
  const fs = require('fs-extra')
  const path = require('path')
  const express = require('express')
  const bodyParser = require('body-parser')
  const swaggerUi = require('swagger-ui-express')
  const spec = require('../doc/app.doc.swagger.conf.js')

  const defaultFile = path.resolve('../../util/data.json')
  const runtimeFile = path.resolve('../../util/runtime.json')

  if (process.env.NODE_ENV) {
    console.warn('Running in test mode.')
  }

  /** @type {Array<User>} */
  const data = (process.env.NODE_ENV !== 'test' && await fs.pathExists(runtimeFile))
    ? require(runtimeFile)
    : require(defaultFile)

  class ClientError extends Error {
    constructor (error, statusCode = 400) {
      super()
      this.error = error
      this.statusCode = statusCode
    }
  }

  const app = express()
  app.use(bodyParser.json())

  app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(spec))

  app.get('/api/users', (req, res, next) => {
    res.send(data)
  })

  app.post('/api/users/:id/meet', async (req, res, next) => {
    const user = data.find(u => u.id === req.params.id)
    if (!user) {
      return next(new ClientError('User not found', 404))
    }

    if (req.body.constructor !== Array || req.body.some(b => !b.id)) {
      return next(new ClientError('Invalid request body', 400))
    }

    const missing = req.body.filter(b => data.every(d => d.id !== b.id))
    if (missing.length) {
      return next(new ClientError(`Users '${missing}' not found`, 404))
    }

    const userKnowsIds = user.knows.map(k => k.id)
    const usersToMeet = req.body.map(k => k.id)

    const alreadyMet = usersToMeet.filter(id => userKnowsIds.includes(id))

    if (alreadyMet.length) {
      return next(new ClientError(`User '${req.params.id}' already met '${alreadyMet}'`, 409))
    }

    user.knows.push(...req.body)

    await fs.outputFile(runtimeFile, JSON.stringify(data, null, 4))

    return res.send(user.knows)
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
