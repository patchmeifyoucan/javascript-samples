// Trivial thought

var results = [];

function x() {
  var i;
  for (i = 0; i < 5; ++i) {
    var fn = function () {
      console.log(i);
    };
    results.push(fn);
  }
}

x();

results.forEach(function (f) {
  f();
});


































// Explanation:
// hoisting of i + function scope => it is the same variable
