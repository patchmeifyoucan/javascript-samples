// What is the content length of the file?

var fs = require('fs')
var content = fs.readFile('content')
console.log(content.length)

// Explanation
// readFile is an asynchronous operation. Therefore, it cannot be synchronously assigned via the assignment operator
