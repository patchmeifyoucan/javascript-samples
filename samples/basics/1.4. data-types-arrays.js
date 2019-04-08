var {printArray, line} = require('./utils');

var array = new Array(5);
// console.log('array length', array.length);

printArray(array);

line('-');
array.push(1);

printArray(array);

var last = array.pop();
console.log(last);

// printArray(array);

// console.log(Object.getOwnPropertyNames(array));
// console.log(Object.getOwnPropertyDescriptor(array, 'length'));
// delete array.length;

array.length = 20;

// printArray(array);

array.push(3);

var defined = array.filter(function (value) {
  return !!value
});

var notDefined = array.filter(function (value) {
  return !value
});

var unique = array.filter(function (value, index, self) {
  return self.indexOf(value) === index;
});

var copy = array.slice();

// printArray(defined);
// printArray(notDefined);
// printArray(unique);

console.log('copy', array === copy);

var numbers = [0, 1, 2, null, null, 6, 7];

var values = numbers.filter(function (n) {
  return !!n;
});

console.log('values:', values);

