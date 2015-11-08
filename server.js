var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//var mongo = require('mongojs');
//var db = mongojs('mongodb://ali:123@ds031601.mongolab.com:31601/rating', ['candidateList']);

require('./routes/routes.js')(app, express, fortune, bodyParser);

app.listen(3000, function(){
	console.log('Server is listening on port 3000. Press CTRL + c to stop it.');
});