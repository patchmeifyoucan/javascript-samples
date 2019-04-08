// Introducing Array.prototype.filter

var people = [{age: 23}, {age: 87}, {age: 32}, {age: 65}, {age: 11}, {age: 22}, {age: 87}];

var young = people.filter(function (p) {
  return p.age < 50
});

var experienced = people.filter(function (p) {
  return p.age >= 50
});

console.log(young);
console.log(experienced);