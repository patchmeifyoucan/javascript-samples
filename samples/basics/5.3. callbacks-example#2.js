// What is logged?

var util = require('./utils').util;

util.readWithDefault('doesnotexist', function (err, res) {
  if (err)
    console.error(err);
  else
    console.log(res.length);
});



































