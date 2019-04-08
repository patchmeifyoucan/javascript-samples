// scope this code first to be able to the scope chain

(function outerScope() {
  var results = [];

  function x() {
    for (var i = 0; i < 5; ++i) {
      results.push(function innerScope() {
        var y = i;
        console.log(y);
      });
    }
  }

  x();

  results.forEach(function loop(f) {
    f();
  });
})();


// Explanation
// [[property]] -> internal property
// Debugging shows in which environment the innerScope function is executed
// Scope references are hold if there is any reference to something defined within this scope