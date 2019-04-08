// In which order is i logged?
var fs = require('../util/fake-fs').fss;

function read(i) {
  fs.readFile('content', function (err, res) {
    console.log('done ' + i)
  });
}

for (var i = 0; i < 50; ++i) {
  read(i);
}




























// Explanation
// The used method is a custom method that only looks like the original
// Intentionally, it performs operations synchronously in order to show that own code is always executed
// synchronously even with using callbacks. Therefore callbacks !== async


