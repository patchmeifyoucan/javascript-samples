'use strict';

function print(obj) {
  var pad = 15;
  for (var k in obj) {

    var value = obj[k];
    console.log('-'.repeat(pad * 2));
    console.log('key: '.padStart(pad) + k);
    console.log('value: '.padStart(pad) + value);
    console.log('type: '.padStart(pad) + typeof value);

    console.log('=== false: '.padStart(pad) + (false === value));
    console.log(' == false: '.padStart(pad) + (false == value));

    console.log('=== true: '.padStart(pad) + (true === value));
    console.log(' == true: '.padStart(pad) + (true == value));

    console.log('!value: '.padStart(pad) + (!value));
    console.log('!!value: '.padStart(pad) + (!!value));

    console.log('converted: '.padStart(pad) + (Boolean(value)));

    if (value)
      console.log('evaluated to true');
    else
      console.log('evaluated to false');
  }
}

var falsy = {
  null: null,
  undefined: undefined,
  empty: '',
  zero: 0
};

var truthy = {
  object: {},
  array: {},
  one: 1,
  string: 'hello',
  function: function () {
    var x = 'hello';

  }
};

// print(falsy);
// print(truthy);

var comparisonsSloppy = {
  stringVsNumber: '1' == 1,
  stringVsBoolean: '1' == true,
  numberVsBoolean: 1 == true
};

var comparisonsStrict = {
  stringVsNumber: '1' === 1,
  stringVsBoolean: '1' === true,
  numberVsBoolean: 1 === true
};

// console.log();
// console.log(JSON.stringify(comparisonsSloppy, null, 4));
console.log(JSON.stringify(comparisonsStrict, null, 4));

