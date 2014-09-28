var http = require('http');

http.get(process.argv[2], function(response) {
  var dataReceived = "";
  response.setEncoding('utf8');
  response.on('data', function(data) {
    dataReceived += data;
  });
  response.on('end', function() {
    console.log(dataReceived.length);
    console.log(dataReceived);
  });
});
