var { Context } = require('../util/context')
var ctx = new Context({}, { padding: 25 })

// Currying - https://developer.mozilla.org/de/docs/Web/JavaScript/Closures
function add (x, y) {
  if (!y) {
    return function (y) {
      return x + y
    }
  }

  return x + y
}

var isThree = add(3, 0)
var isFour = add(3, 1)
ctx.add({ isThree, isFour })
ctx.peval('typeof isThree')
ctx.peval('typeof isFour')
