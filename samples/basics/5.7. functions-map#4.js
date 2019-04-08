// Keep it inline because its as short as it can be in ES6

var people = [{age: '42'}, {age: '25'}, {age: '84'}, {age: '24'}, {age: '31'}, {age: '7'}, {age: '52'}, {age: '33'}, {age: '25'}, {age: '31'}, {age: '88'}, {age: '51'}, {age: '90'}, {age: '79'}, {age: '67'}, {age: '61'}, {age: '26'}, {age: '50'}, {age: '34'}, {age: '22'}, {age: '7'}, {age: '54'}, {age: '67'}, {age: '93'}, {age: '14'}, {age: '80'}, {age: '67'}, {age: '43'}, {age: '55'}, {age: '40'}, {age: '38'}, {age: '10'}, {age: '91'}, {age: '48'}, {age: '49'}, {age: '79'}, {age: '27'}, {age: '4'}, {age: '68'}, {age: '61'}, {age: '61'}, {age: '82'}, {age: '43'}, {age: '93'}, {age: '26'}, {age: '72'}, {age: '66'}, {age: '89'}, {age: '87'}, {age: '71'}, {age: '43'}, {age: '29'}, {age: '78'}, {age: '7'}, {age: '50'}, {age: '17'}, {age: '17'}, {age: '51'}, {age: '76'}, {age: '16'}, {age: '66'}, {age: '27'}, {age: '49'}, {age: '29'}, {age: '95'}, {age: '32'}, {age: '39'}, {age: '8'}, {age: '54'}, {age: '21'}, {age: '18'}, {age: '69'}, {age: '62'}, {age: '57'}, {age: '98'}, {age: '87'}, {age: '56'}, {age: '93'}, {age: '98'}, {age: '54'}, {age: '23'}, {age: '52'}, {age: '93'}, {age: '6'}, {age: '72'}, {age: '26'}, {age: '55'}, {age: '34'}, {age: '55'}, {age: '45'}, {age: '33'}, {age: '22'}, {age: '46'}, {age: '57'}, {age: '39'}, {age: '75'}, {age: '36'}, {age: '21'}, {age: '59'}, {age: '44'}];

// You would probably use one statement for the .map.map.filter chain
var under30 = people
  .map(p => p.age)
  .map(a => Number(a))
  .filter(a => a < 100)
  .filter((e, i, a) => a.indexOf(e) === i)
  .sort((a, b) => a - b);

console.log(JSON.stringify(under30));

// In ES5 - 280 chars, 154 chars ES6

// var under30 = people
//   .map(function (p) {
//     return p.age;
//   })
//   .map(function (a) {
//     return Number(a);
//   })
//   .filter(function (a) {
//     return a < 30;
//   })
//   .filter(function (e, i, a) {
//     return a.indexOf(e) === i;
//   })
//   .sort(function (a, b) {
//     return a - b;
//   });
