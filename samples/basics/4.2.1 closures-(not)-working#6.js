var results = [];

function create(obj) {
  return function createInner() {
    console.log(obj.i);
  }
}

function x() {
  for (var i = 0; i < 5; ++i) {
    var obj = {};
    obj.i = i;
    results.push(create(obj));
  }
}

x();

results.forEach(function loop(f) {
  f();
});





















// Explanation
// In the last example, this is the code that is actually executed
// -> Expected behavior