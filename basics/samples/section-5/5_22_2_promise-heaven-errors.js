(async () => {
  const wait = (ms, throwError) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        return reject(new Error(`Error after ${ms} ms`))
      }

      return resolve(`Waited for ${ms} ms`)
    }, ms)
  })

  // with async-await, this is too easy ...

  try {
    console.log(await wait(100))
    console.log(await wait(100))
    console.log(await wait(100))
    console.log(await wait(100))
    console.log('put some synchronous code right here ...')

    const many = await Promise.all([wait(101), wait(102), wait(103), wait(104)])
    console.log('many', many)

    await wait(50, true)

    console.log('... and here')

    console.log(await wait(100))
  } catch (e) {
    console.error(e)
  }
})()
