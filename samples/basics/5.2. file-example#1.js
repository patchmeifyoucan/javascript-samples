// In which order is i logged?
var fs = require('fs');

function read(i) {
  fs.readFile('content', function (err, res) {
    console.log('done ' + i)
  });
}

for (var i = 0; i < 50; ++i) {
  read(i);
}










































// Explanation
// Numbers are logged in random order since async operations can return a value via callbacks AT SOME POINT
// You can never assume it any other way