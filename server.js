var express = require('express');
var app = express();

require('./routes/routes.js')(app);

app.listen(3000, function(){
	console.log('Bazinga! Server is listening on 3000');
});