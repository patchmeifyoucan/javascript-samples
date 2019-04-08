var {printObject} = require('./utils');

var constructor = new Object(null);
var literal1 = {};

var obj1 = {};
var obj2 = obj1;

// console.log(obj1 === obj2);

var complex = {
  prim: 3,
  obj: {
    prim: 3
  }
};

// console.log('property access:', complex.prim === complex[x]);
// console.log('property chain:', complex.obj.prim);
// console.log('property chain:', complex.obj.prim.xy);
// console.log('property chain:', complex.obj.prim.xy.c);

// printObject(complex);

complex.new = "new";
// printObject(complex);

// delete complex.obj;
// printObject(complex);

// complex.obj = complex;
// console.log(JSON.stringify(complex));
// printObject(complex);

var json = '{"a":1,"b":2}';
// console.log('json a & a', json.a === json['a']);
// console.log('json a & b', json.a === json['b']);

var js = JSON.parse(json);
console.log('js a & a', js.a === js['a']);
console.log('js a & b', js.a === js['b']);

