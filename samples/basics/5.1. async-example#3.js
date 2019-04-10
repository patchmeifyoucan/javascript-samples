// In which order is i logged?

var fs = require('fs')

for (var i = 0; i < 50; ++i) {
  fs.readFile('content', function (err, res) {
    console.log('done ' + i)
  })
}

// Explanation
// JavaScript scope will always catch you at some point :)
