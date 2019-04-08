// Currying - https://developer.mozilla.org/de/docs/Web/JavaScript/Closures
function add(x, y) {
  if (!y)
    return function (y) {
      return x + y;
    };

  return x + y;
}

var isThree = add(3, 0);
console.log(typeof isThree);
// var isEight = add(5, 3);
//
// console.log(add3(5));
// console.log(isEight);
