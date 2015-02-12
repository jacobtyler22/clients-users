var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var user = require('./lib/models/usersModel')

var app = express();
var port = 9080;
var mongoUri = "mongodb://localhost:27017/clients-user";

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to database at ' + mongoUri);
});

app.use(bodyParser.json());

app.get('/api/user', function(req, res){
	user.find({name: "Jacob"}, function(err, docs){
		if(!err){
			if(docs.length === 0){
				res.status(404).send("No documents found");
			} else {
			res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err);
		}
	})
})

app.post('/api/user', function(req, res){
	user.create(req.body).then(function(response){
		console.log('Successful user created: ' + req.body);
		res.status(200).json(response);
	}, function(error){
		res.status(500).json(error);
	});
});

app.listen(port, function(){
	console.log('Listening on port ' + port);
});