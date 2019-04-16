const wait = ms => new Promise(resolve => {
  setTimeout(() => {
    resolve(`Waited for ${ms} ms`)
  }, ms)
})

wait(100)
  .then(result => {
    console.log(result)
    wait(100)
      .then(result => {
        console.log(result)
        wait(100)
          .then(result => {
            console.log(result)
            wait(100)
              .then(result => {
                console.log(result)
                wait(100)
                  .then(result => {
                    console.log(result)
                    wait(100)
                      .then(result => {
                        console.log(result)
                        wait(100)
                          .then(result => {
                            console.log(result)
                            throw new Error('OOPS!') // Who you're gonna call?
                            wait(100)
                              .then(result => {
                                console.log(result)
                                wait(100)
                                  .then(result => {
                                    console.log(result)
                                    wait(100)
                                      .then(result => {
                                        console.log(result)
                                        wait(100)
                                          .then(result => {
                                            console.log(result)
                                            wait(100)
                                              .then(result => {
                                                console.log(result)
                                              })
                                              .catch(error => console.error(error))
                                          })
                                          .catch(error => console.error(error))
                                      })
                                      .catch(error => console.error(error))
                                  })
                                  .catch(error => console.error(error))
                              })
                              .catch(error => console.error(error))
                          })
                          .catch(error => console.error(error))
                      })
                      .catch(error => console.error(error))
                  })
                  .catch(error => console.error(error))
              })
              .catch(error => console.error(error))
          })
          .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
  })
  .catch(error => console.error(error))
