var {printObject, line} = require('./utils');

var numbers = {
  primitive: 2131,

  skip0: null,

  fromInt: Number(1231),
  fromIntObject: new Number(1231),
  parsedInt: parseInt(1231),

  skip1: null,

  fromNull: Number(null),
  fromNullObject: new Number(null),
  parsedNull: parseInt(null),

  skip2: null,

  fromUndefined: Number(),
  fromUndefinedObj: new Number(),
  parsedUndefined: parseInt(),

  skip3: null,

  fromNumberString: Number('1231'),
  fromNumberStringObj: new Number('1231'),
  parsedNumberString: parseInt('1231'),

  skip4: null,

  fromOtherString: Number('123abc'),
  fromOtherStringObj: new Number('123abc'),
  parsedOtherString: parseInt('123abc'),

  skip5: null,

  parsedNumberHex: parseInt('123abc', 16),
  parsedNumberDec: parseInt('a123abc', 10)
};

// printObject(numbers);

line('-');
console.log(isNaN(Number.MAX_VALUE + Number.MAX_VALUE));
// console.log(NaN === NaN);

line();

// console.log('Max:', Number.MAX_VALUE +Number.MAX_VALUE);
// console.log('Min:', Number.MIN_VALUE);
//
// console.log('MaxSafe:', Number.MAX_SAFE_INTEGER);
// console.log('MinSafe:', Number.MIN_SAFE_INTEGER);
//
// console.log('vs. 32 bit:', Math.round(Number.MAX_SAFE_INTEGER / Math.pow(2, 32)));
// console.log('vs. 64 bit:', Number.MAX_SAFE_INTEGER / Math.pow(2, 64));
//
//
