module.exports = function(app, express, db, fortune, bodyParser){
	users = [{
		"name" : "Ali",
		"email":"ali@mail.com",
		"number":"111-111-1111"
		},
		{
		"name" : "Sina",
		"email":"sina@mail.com",
		"number":"222-222-2222"
		}];

	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + 'public'));
	
	app.get('/', function(req, res, next){
		res.render('index');
	});
	app.get('/about', function(req, res, next){
		res.render('about');
	});
	app.get('/sina', function(req, res, next){
		console.log("Server: I got a Sina App request");
		res.send('Hello Sina');
	});

	app.get('/fortune', function(req, res, next){
		console.log("Server: I got a fortune App request");
		res.send(fortune.getFortune());
	});

	app.get('/getList', function(req, res, next){
		console.log("Server: I got a getList App request");
		res.json(users);
	});

	app.get('/getList:id', function(req, res, next){
		var id = req.params.id;
		console.log("Server: I got a getList App request for user with this id: ", id );
		res.json(users[id]);
	});

	app.get('/checker', function(req, res, next){
		var name = req.body.name;
		console.log("Server: I got a checker App request this user: ", name );
		if (name == "Cyrus") {
			res.send('Right name man!');
							}else
			{
				res.send("Yo! peace of shit! get away!");
			}
	});

	app.post('/add', function(req, res){
		console.log("Server: I got add App request this shit: ", req.body);
		users.push(req.body);
		res.json(users);
	});

	app.delete('/delete:id', function(req, res){
		var id = req.params.id;
		console.log("Server: I got delete App request this shit: ", id);
		users.splice(id, 1);
		res.json(users);

	});


	// app.get('/database', function(req, res, next){
	// 	  db.candidateList.find(function (err, docs) {
 //    	  console.log(docs);
 //          res.json(docs);
 //  });
	// });

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


