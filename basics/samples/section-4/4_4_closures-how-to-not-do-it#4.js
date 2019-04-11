// Of course, y is in scope of x...
// Move it into the declared function

var results = []

function x () {
  for (var i = 0; i < 5; ++i) {
    results.push(function scope () {
      var y = i
      console.log(y)
    })
  }
}

x()

results.forEach(function (f) {
  f()
})

// Explanation
// i is assigned to y, therefore, it does not matter which value y has, it will always be assigned
// the value of i and then logged, since i is within the function scope of x, where it stays with
// its final value until it is garbage collected
