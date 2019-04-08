// What is the content length of the file?
var fs = require('fs');

fs.readFile('content', 'utf8', function (err, content) {
  console.log(content.length);
});





















// Explanation
// In ES5, asynchronous operations can never be assigned via the assignment operator
// ES7 async/await enables this via awaiting Promises (not covered in this workshop)