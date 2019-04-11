// Trivial thought does not work.
// Instead, avoid the reference

var results = []

function x () {
  for (var i = 0; i < 5; ++i) {
    results.push(function () {
      console.log(i)
    })
  }
}

x()

results.forEach(function (f) {
  f()
})

// Explanation: same as before
