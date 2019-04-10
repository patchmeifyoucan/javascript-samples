// It is not the reference to the function.
// We know about scopes, so let's reassign the variable

var results = []

function x () {
  var i
  var y

  for (i = 0; i < 5; ++i) {
    y = i
    results.push(function () {
      console.log(y)
    })
  }
}

x()

results.forEach(function (f) {
  f()
})

// What????????????????????

// Explanation:

// y is hoisted and stays in scope of function x
// it is 4 instead of 5 because a number is assigned by value and therefore not incremented when the counter is
