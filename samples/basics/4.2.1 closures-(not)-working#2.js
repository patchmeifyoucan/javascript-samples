var results = [];

function create(n) {
  return function createInner() {
    console.log(n);
  }
}

function x() {
  for (var i = 0; i < 5; ++i) {
    results.push(create(i));
  }
}

x();

results.forEach(function loop(f) {
  f();
});












// Explanation:
// x is not in the scope chain anymore. instead, create is the closure containing i.
// but how, let's elaborate on this