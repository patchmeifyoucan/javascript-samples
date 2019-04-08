// How do we fix the code?
var fs = require('fs');
var util = {};

util.readWithDefault = function (file, cb) {
  if (file !== 'content') {
    fs.readFile('default', function (err, res) {
      cb(err, res);
    });
  }

  fs.readFile(file, function (err, res) {
    cb(err, res);
  });
};

util.readWithDefault('doesnotexist', function (err, res) {
  if (err)
    console.error(err);
  else
    console.log(res.length);
});

// throws error AND reads file? -> fix it


































// Statements in JavaScript is executed just as in any other language. After calling a callback, there is still
// code that can run. This enables doing multiple things at once, which themselves have to be scheduled properly!
// Calling a callback function does not result in the executing function to return from execution!
