const wait = ms => new Promise(resolve => {
  setTimeout(() => {
    resolve(`Waited for ${ms} ms`)
  }, ms)
})

wait(100)
  .then(result => {
    console.log(result)
    return wait(100)
  })
  .then(result => {
    console.log(result)
    return wait(100)
  })
  .then(result => {
    console.log(result)
    return wait(100)
  })
  .then(result => {
    console.log(result)
    return wait(100)
  })
  .then(result => {
    console.log(result)
    return wait(100)
  })
  .then(result => {
    console.log(result)
    return wait(100)
  })
  .then(result => {
    console.log(result)
    return wait(100)
  })
  .catch(err => console.error(err))
