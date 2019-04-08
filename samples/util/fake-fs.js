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

module.exports = {fss, fsa, util};
