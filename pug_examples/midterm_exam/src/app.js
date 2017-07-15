var express = require('express');
var app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
	res.render('index', { z: 3 });
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});