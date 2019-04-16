const wait = ms => new Promise(resolve => {
  setTimeout(() => {
    resolve(`Waited for ${ms} ms`)
  }, ms)
})

wait(100)
  .then(result1 => {
    console.log(result1)

    wait(100)
      .then(result2 => {
        console.log(result2)
        wait(100)
          .then(result3 => {
            console.log(result3)
          })
          .catch(error3 => console.error(error3))
      })
      .catch(error2 => console.error(error2))
  })
  .catch(error1 => console.error(error1))
