// In which order is i logged?

var fs = require('../util/fake-fs').fsa

function read (i) {
  fs.readFile('content', function (err, res) {
    console.log('done ' + i)
  })
}

for (var i = 0; i < 50; ++i) {
  read(i)
}

// This custom method uses a random delay, scheduled by the internal event loop
// Therefore, this code runs asynchronously since it is scheduled by the runtime
// Only the runtime can schedule async operations by predefined methods, otherwise
// the event loop would become a complete mess!
