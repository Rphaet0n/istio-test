var express = require('express');
var app = express();

app.post('/', function (req, res) {
  console.log(req.headers);
  res.send({ some: 'json'});
});

app.listen(3011, function () {
  console.log('statistics app listening on port 3011!');
});