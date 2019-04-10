var results = []

function create (obj) {
  return function createInner () {
    console.log(obj.i)
  }
}

function x () {
  var obj
  for (var i = 0; i < 5; ++i) {
    obj = {}
    obj.i = i
    results.push(create(obj))
  }
}

x()

results.forEach(function loop (f) {
  f()
})

// Explanation
// declaration is hoisted, {} = new Object(null), therefore, a new object reference is assigned
// "expected" behavior
