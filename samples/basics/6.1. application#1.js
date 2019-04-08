var request = require('request');

// var host = 'http://172.23.112.52:8888';
var host = 'http://localhost:8888';

var startUrl = host + '/api/start';
request(startUrl, function (err, res) {
  if (err)
    throw err;

  var id = JSON.parse(res.body).id;

  var statusUrl = host + '/api/id/' + id + '/status';

  var timer = setInterval(function () {
    request(statusUrl, function (err, res) {


      if (err) {
        clearInterval(timer);
        throw err;
      }

      var result = JSON.parse(res.body);

      console.log(result.status);
      if (result.status === 'running')
        return;

      clearInterval(timer);
      var resultUrl = host + '/api/id/' + id + '/full';
      request(resultUrl, function (err, res) {
        if(err)
          throw err;

        console.log(JSON.parse(res.body));
      });
    });
  }, 1000);
});














