function handler (err, res) {
  console.log(id, res)
}

function doSomethingAsync (value, cb) {
  var id = 'someid'
  setTimeout(function () {
    return cb(null, value)
  }, Math.random() * 10)
  return id
}

var id = doSomethingAsync('myvalue', handler)
