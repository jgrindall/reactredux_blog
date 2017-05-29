var express, app, port, fs, mongoose, bodyParser;
var Post, MONGO_URI;

express = 			require("express");
mongoose = 			require('mongoose');
bodyParser = 		require('body-parser');
app = 				express();
port = 				Number(process.env.PORT || 5000);
MONGO_URI = 		process.env.MONGOLAB_URI || 'mongodb://localhost/reactblog';

app.use(express.static(__dirname + "/public"));
app.use(bodyParser());

Post = mongoose.model("Post", new mongoose.Schema({
	"authorid"	    :	{"type":String},
	"title"		    :	{"type":String},
	"body"		    :  	{"type":String}
}));

mongoose.connect(MONGO_URI, function(err, res){
	if (err) {
		console.log ('ERROR connecting to: ' + MONGO_URI + '. ' + err);
	}
	else {
	    console.log ('Succeeded connected to: ' + MONGO_URI);
	}
});

app.get('/posts', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	Post.find({}, function(err, data){
		res.send(data);
	});
});

app.delete('/delete/:id', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	var id = req.params["id"];
	if(id){
		Post.findById(id, function (err, post){
			if(err){
				console.log(err);
			}
			else if(post){
				post.remove(function (err) {
		      		if (err) {
		        		console.log("error removing");
		        		res.sendStatus(400);
		      		}
		      		else {
		        		res.send(post);
		      		}
		    	});
			}
		});
	}
});



/*app.post('/update/:id', function(req, res){
	var id = req.params["id"];
	if(id){
		Post.findById(id, function (err, post){
			if(err){

			}
			else if(post){
				post.remove(function (err) {
		      		if (err) {
		        		console.log("error removing");
		        		res.sendStatus(400);
		      		}
		      		else {
		        		res.sendStatus(200);
		      		}
		    	});
			}
		});
	}
});*/


app.get('/post/:id', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	var id = req.params["id"];
	if(id){
		Post.findById(id, function (err, post){
			if(err){

			}
			else if(post){
				res.send(post);
			}
		});
	}
});

app.post('/post', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	var r = Math.floor(Math.random()*100000);
	var post = new Post({
		"authorid"	    :	1,
		"categories"	:	"fun,games,cookery",
		"title"		    :	"My blog " + r,
		"body"		    :  	"Stuff I think " + r
	})
	.save(function (err, product, numAffected){
		if(err){

		}
		else if(post){
			res.send(post);
		}
	});
});

app.get('/', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.render("index.html");
});

app.listen(5000);
