// Switch to ES6 block scope first
// x
{
  function x() {
    var result = -1;

    for (var result = 0; result < 5; ++result) {
      var result = Math.random();
      console.log(result);
    }

    return result;
  }

  var result = x();
  console.log('x:', result);
}

// y
{
  function y() {
    var result = -1;

    for (var result = 0; result < 5; ++result) {
      var result = 'string';
      console.log(result);
    }

    return result;
  }

  var result = y();
  console.log('y:', result);
}

// z
{
  function z() {
    for (var i = 0; i < 5; ++i) {
      console.log(i);
    }

    return i;
  }

  var result = z();
  console.log('z:', result);
}