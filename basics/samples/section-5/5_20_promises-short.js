// enables "await"
// ES6 now!
(async () => {
  const success = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Okay')
    }, Math.random() * 10)
  })

  const fail = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`I'm an error.`))
    }, Math.random() * 10)
  })

  success
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => console.log('success done'))

  fail
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => console.log('fail done'))
})()
