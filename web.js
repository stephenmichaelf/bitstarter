var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var fileContents = fs.readFileSync('index.html');
var buffer = new Buffer(fileContents);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, buffer.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
