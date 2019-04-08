function line(c) {
  if (!c) return console.log();

  console.log(c.repeat(80));
}

function printArray(arr) {
  if (!arr.length) {
    console.log('Empty array.');
    return;
  }

  for (var i = 0; i < arr.length; ++i)
    console.log(i, arr[i]);

  console.log();
}

function printObject(o) {
  var pad = 20;
  console.log('key'.padEnd(pad), 'type-string'.padEnd(pad), 'string-value'.padEnd(pad), 'actual-value');
  line('-');

  for (var k in o) {
    if (k.indexOf('skip') === 0) {
      line();
      continue;
    }

    console.log(k.padEnd(pad), (typeof o[k]).padEnd(pad), o[k].toString().padEnd(pad), o[k]);
  }
  console.log();
}


var fs = require('fs');

var fss = {};
fss.readFile = function (file, cb) {
  return cb(null, 'this would be some content');
};

var fsa = {};
fsa.readFile = function (file, cb) {
  setTimeout(function () {
    return cb(null, 'this would be some content');
  }, Math.random() * 100);
};

var util = {};

util.readWithDefault = function (file, cb) {
  if (file !== 'content') {
    return fs.readFile('default', function (err, res) {
      return cb(err, res);
    });
  }

  return fs.readFile(file, function (err, res) {
    return cb(err, res);
  });
};


module.exports = {fss, fsa, util, line, printArray, printObject};