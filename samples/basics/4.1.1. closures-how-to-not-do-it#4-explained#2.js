// Move everything out of the outer Scope

var y = 0;
var results = [];
(function outerScope() {
  function x() {
    for (var i = 0; i < 5; ++i) {
      results.push(function innerScope() {
        y = i;
        console.log(y);
      });
    }
  }

  x();
})();


y = 'somestring';
results.forEach(function loop(f) {
  f();
});


// Explanation
// This would is what would happen in any other programming language


