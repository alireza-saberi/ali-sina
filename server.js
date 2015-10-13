var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');
var mongo = require('mongojs');
var db = mongojs('mongodb://ali:123@ds031601.mongolab.com:31601/rating', ['candidateList']);

require('./routes/routes.js')(app, express, db, fortune);

app.listen(3000, function(){
	console.log('Bazinga! Server is listening on 3000');
});