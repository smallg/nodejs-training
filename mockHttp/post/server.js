var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var app = express();

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/index.html', function (req, res) {
    req.on('data', function (data) {
        console.dir(data, data.toString());
        var obj = querystring.parse(data.toString());
        console.dir(obj);
        res.send(obj);
    });
});
app.listen(1337, "127.0.0.1");
