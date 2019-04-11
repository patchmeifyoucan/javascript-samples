// This file runs just some basic app validations. No test runnter etc. needed
(async () => {
  'use strict'
  const assert = require('assert').strict
  const { http, getLogger } = require('../../util/util')
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

    const actualGeofarm = users.filter(u => u.company.toLowerCase() === 'geofarm').map(u => u.email).sort()
    assert.deepStrictEqual(actualGeofarm, expectedGeofarm)
    logger.info('Task 2 valid.')
  }

  const task3test = async () => {
    logger.info('Testing task 3.')
    const domains = users
      .filter(u => u.company.toLowerCase() === 'zillacon')
      .map(u => u.email)
      .map(email => email.split('.').pop())
      .filter((e, i, a) => a.indexOf(e) === i)

    // Task 3.1
    const expected = 3
    assert.strictEqual(domains.length, expected, `Expected ${expected} domains, got ${domains.length}.`)

    // Task 3.2
    const expected3 = ['Dennis Schroeder', 'Stuart Kirby', 'Pollard Reid'].sort()

    const first3 = users.sort((a, b) => Date.parse(a.registered) - Date.parse(b.registered))
      .slice(0, 3)
      .map(u => `${u.name.first} ${u.name.last}`)
      .sort()

    assert.deepStrictEqual(first3, expected3, `Expected ${expected3}, got ${first3}.`)

    // Task 3.3
    const expectedAvg = 942861608
    const avg = Math.floor(users.map(u => Number(u.balance)).reduce((total, value) => total + value, 0) / users.length)
    assert.strictEqual(avg, expectedAvg, `Expected ${expectedAvg}, got ${avg}.`)

    // Task 3.4 does not need a test. Either the person with the highest balance is extracted or one can sort the array
    // to find the richest persons.
    logger.info('Task 3 valid.')
  }

  const task4test = async () => {
    logger.info('Testing task 4.')
    // Task 4.1
    const duplicates = users.map(u => u.id).filter((e, i, a) => a.indexOf(e) !== i)
    const responses = await Promise.all(duplicates.map(id => http.get(`/api/users/${id}`)))
    const expectedNames = ['Peck Mack', 'Harrison Smith', 'Green Rutledge', 'Allison Duffy'].sort()
    const names = responses.map(r => r.data).map(user => `${user.name.first} ${user.name.last}`).sort()
    assert.deepStrictEqual(expectedNames, names, `Expected ${expectedNames}, got ${names}.`)

    // Task 4.2
    const expected = 11
    const egypto = users.filter(u => u.company.toLowerCase() === 'egypto')
    assert.strictEqual(egypto.length, expected, `Expected ${expected}, got ${egypto.length}.`)
    // Answer can be provided by analyzing the result

    // Task 4.3: Method just uses any preprocessed input
    const functionToCode = (input, ...props) => {
      const forbidden = ['name']
      const invalid = props.filter(p => forbidden.includes(p))
      if (invalid.length) {
        throw new Error(`Invalid properties ${forbidden}.`)
      }

      return input.map(i => props.reduce((r, p) => {
        if (!i[p]) {
          throw new Error(`Invalid property name '${p}'!`)
        }

        r[p] = i[p]
        return r
      }, {}))
    }

    assert.throws(() => {
      functionToCode(users, 'name')
    })

    assert.throws(() => {
      functionToCode(users, 'badproperty')
    })

    assert.doesNotThrow(() => {
      functionToCode(users, 'id', 'balance')
    })

    // Task 4.4: This implementation does not change anything since it operates on a clean input already
    logger.info('Task 4 valid.')
  }

  await task1test()
  await task2test()
  await task3test()
  await task4test()
  // TODO test task 5
})()
