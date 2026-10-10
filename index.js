
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    console.log("Hello World");
    res.send("Hello World");
});

app.listen(port, '0.0.0.0', function () {
    console.log('Listening on port: ' + port);
});
