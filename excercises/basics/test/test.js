// This file runs just some basic app validations. No test runnter etc. needed
(async () => {
  'use strict'
  const assert = require('assert').strict
  const { http, getLogger } = require('../util/util')
  const logger = getLogger(__filename)

  const { status, /** @type User[] */ data: users } = await http.get('/api/users')

  const task1test = async () => {
    logger.info('Testing task 1.')

    assert.strictEqual(status, 200, `Expected status code 200, got ${status}.`)
    assert.strictEqual(users.constructor, Array, `Expected Array, got ${users.constructor}.`)

    const expectedTotal = 105
    assert.strictEqual(users.length, expectedTotal, `Expected ${expectedTotal} users, got ${users.length}.`)

    const expectedActive = 65
    const active = users.filter(u => u.isActive)
    assert.strictEqual(active.length, expectedActive, `Expected ${expectedActive} active users, got ${active.length}.`)
    logger.info('Task 1 valid.')
  }

  const task2test = async () => {
    logger.info('Testing task 2.')

    // Task 2.1
    const first = Math.min(...users.map(u => Date.parse(u.registered)))
    const parsed = new Date(first).toISOString()
    const expectedDate = '2014-02-01T16:20:27.000Z'
    assert.strictEqual(parsed, expectedDate, `Expected date to be '${expectedDate}', got '${parsed}'.`)

    // Task 2.2
    const expectedAverage = 28
    const avg = Math.floor(users.reduce((total, user) => total + user.age, 0) / users.length)
    assert.strictEqual(avg, expectedAverage, `Average age should be ${expectedAverage}, got ${avg}.`)

    // Task 2.3
    const expectedGeofarm = ['avis.spencer@geofarm.com', 'sharpe.richard@geofarm.us', 'powell.rivers@geofarm.com',
      'roxanne.lucas@geofarm.us', 'claudette.collier@geofarm.com', 'pitts.frye@geofarm.com', 'alison.oliver@geofarm.com',
      'betsy.crawford@geofarm.com', 'dominguez.hurst@geofarm.com', 'hall.guthrie@geofarm.com', 'brittney.brock@geofarm.com',
      'lynch.mcclure@geofarm.com', 'frederick.paul@geofarm.com'].sort()

    const actualGeofarm = users.filter(u => u.company.toLocaleLowerCase() === 'geofarm').map(u => u.email).sort()
    assert.deepStrictEqual(actualGeofarm, expectedGeofarm)
  }

  await task1test()
  await task2test()
})()
