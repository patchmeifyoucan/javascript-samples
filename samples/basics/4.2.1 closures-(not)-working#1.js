var results = [];

function create(i){
  console.log(i);
}

function x(){
  for (var i = 0; i < 5; ++i) {
    results.push(create(i));
  }
}

x();

results.forEach(function loop(f) {
  f();
});





















// Explanation
// implicit return of undefined