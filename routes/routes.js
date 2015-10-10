module.exports = function(app, express, fortune){
	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + 'public'));
	app.get('/', function(req, res, next){
		res.render('index');
	});
	app.get('/about', function(req, res, next){
		res.render('about');
	});
	app.get('/sina', function(req, res, next){
		res.send('Hello Sina');
	});

	app.get('/fortune', function(req, res, next){
		res.send(fortune.getFortune());
	});
	// catching 404 error
	app.use(function(req, res, next){
		res.status(404);
		res.render('404');
	});

	// catching 500 error
	app.use(function(err, req, res, next){
		console.log();
		res.status(500);
		res.render('500');
	});	
};


