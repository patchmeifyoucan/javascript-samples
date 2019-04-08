function z() {
  console.log('z: a =', a);
  console.log('z: b =', b);
}

function y() {
  a = 5;
  z();
}

function x() {
  var a = 3;
  var b;
  var d;

  a = 3;

  aaa = 5;
  b = 5;
  y();

  d = a;

  console.log('x: b =', b);
}

x();


// ==== "real world code"

// var lib1 = {
//   init: function () {
//     x = function () {
//       console.log('done');
//     }
//   },
//   exec: function () {
//     x();
//   }
// };
//
// var lib2 = {
//   init: function () {
//     x = true;
//   },
//   exec: function () {
//     console.log(x);
//   }
// };
//
// lib1.init();
// lib2.init();
// lib1.exec();
// lib2.exec();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
