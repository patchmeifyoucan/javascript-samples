// Let's pass the whole object

var results = [];

function create(obj) {
  return function createInner() {
    console.log(obj.i);
  }
}

function x() {
  var obj = {};
  for (var i = 0; i < 5; ++i) {
    obj.i = i;
    results.push(create(obj));
  }
}

x();

results.forEach(function loop(f) {
  f();
});















// Explanation

// 44444 was seen before for the same reason, obj.i is assigned the last value of the iteration,
// then the loop exist
// obj is passed as reference to the create scope, therefore, its reference is changed -> expected behavior




