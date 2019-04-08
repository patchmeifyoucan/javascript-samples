{
  function a() {
    var result = -1;

    for (var result = 0; result < 5; ++result) {
      var result = Math.random();
      console.log(result);
    }

    return result;
  }

  var result = a();
  console.log('a:', result);
}

{
  function b() {
    var result = -1;

    for (var result = 0; result < 5; ++result) {
      var result = 'string';
      console.log('loop', result);
    }

    return result;
  }

  var result = b();
  console.log('y:', result);
}

{
  function c() {
    var result = -1;

    for (var result = 0; result < 5; ++result) {
      var result = '';
      console.log('loop', result);
    }

    return result;
  }

  var result = c();
  console.log('y:', result);
}

{
  function d() {
    var result = '';

    console.log('loop-out', result);
    for (result; result < 5; ++result) {
      console.log('loop-in', result);
    }

    return result;
  }

  var result = d();
  console.log('y:', result);
}

{
  function d() {
    var result = 'some-string';

    console.log('loop-out', result);
    for (result; result < 5; ++result) {
      console.log('loop-in', result);
    }

    return result;
  }

  var result = d();
  console.log('y:', result);
}

{
  function e() {
    for (var i = 0; i < 5; ++i) {
      console.log(i);
    }

    return i;
  }

  var result = e();
  console.log('z:', result);
}
