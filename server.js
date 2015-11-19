// adding requirements
var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// setting 
app.set('port', 3000 || process.env.PORT);
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));

//routes
require('./routes/routes.js')(app, express, fortune, bodyParser);

app.listen(app.get('port'), function(){
	console.log('Server is listening on port' + app.get('port') + '. Press CTRL-C to terminate.');
});