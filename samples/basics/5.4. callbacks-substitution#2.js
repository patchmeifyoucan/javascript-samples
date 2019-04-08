var timer = setInterval(function () {
  console.log("called");
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 5000);

