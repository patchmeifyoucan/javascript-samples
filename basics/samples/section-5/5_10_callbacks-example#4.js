// 2 kinds of results
function doSomethingAsync (value, cb) {
  var id = 'someid'
  setTimeout(function () {
    return cb(null, value)
  }, Math.random() * 10)
  return id
}

// async method can return sync values, too
var id = doSomethingAsync('myvalue', function (err, res) {
  console.log('callback result', id, res)
})

console.log('after call', id)

