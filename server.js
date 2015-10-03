var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');

require('./routes/routes.js')(app, express, fortune);

app.listen(3000, function(){
	console.log('Bazinga! Server is listening on 3000');
});