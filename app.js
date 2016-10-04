var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, './')));
app.use('/css', express.static(path.join(__dirname, './css')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
