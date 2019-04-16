// enables "await"
// ES6 now!
(async () => {
  var { section } = require('../../util/util')

  section('Definition')
  const wait = (ms, throwError) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        return reject(new Error(`Error after ${ms} ms`))
      }

      return resolve(`Waited for ${ms} ms`)
    }, ms)
  })

  console.time('wait')
  await wait(1000)
  console.timeEnd('wait')

  section('Using Promise.all')
  const all = await Promise.all([
    wait(2000),
    wait(1000),
    wait(1010),
    wait(1005)
  ])

  console.log(all)

  section('Using Promise.all with ES6 destructuring')
  const [one, two, ...rest] = await Promise.all([
    wait(2000),
    wait(1000),
    wait(1010),
    wait(1005)
  ])

  console.log(one)
  console.log(two)
  console.log(rest)

  console.time('error')
  try {
    const [err, ..._] = await Promise.all([
      wait(5, true),
      wait(1000),
      wait(2000),
      wait(1005)
    ])
  } catch (e) {
    console.timeEnd('error')
    console.error(e)
  }
})()
