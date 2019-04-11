// What is logged?

var util = require('../../util/fake-fs').util

util.readWithDefault('content', function (err, res) {
  if (err) {
    console.error(err)
  } else {
    console.log(res.length)
  }
})

// Seems to work.
