// Let's try to break it by using an object which is clearly passed as reference

var results = []

function create (i) {
  return function createInner () {
    console.log(i)
  }
}

function x () {
  var obj = {}
  for (var i = 0; i < 5; ++i) {
    obj.i = i
    results.push(create(obj.i))
  }
}

x()

results.forEach(function loop (f) {
  f()
})

// Explanation
// a number is passed as copied value, therefore, i is "enclosed" as value and consecutively not changed by
// any reference change
