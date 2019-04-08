var {printObject} = require('./utils');

var bools = {
  // primitiveTrue: true,
  // primitiveFalse: false,

  // fromBool: Boolean(true),
  // fromTrueString: Boolean('true'),
  // fromFalseString: Boolean('false'),

  // fromEmptyString: Boolean(''),
  // fromNull: Boolean(null),
  // fromUndefined: Boolean(),
  // fromZero: Boolean(0),
  // fromNonZero: Boolean(1110),
  //
  fromTrueObj: new Boolean(true),
  fromFalseObj: new Boolean(false),
  fromZeroObj: new Boolean(0),
  fromEmptyStringObj: new Boolean('')
};

printObject(bools);
