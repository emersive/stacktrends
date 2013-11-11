var Sequelize = require('sequelize');
var express = require('express');
var https = require('https');
var http = require("http");

var app = express();

var clientApi = require('my_modules/clientApi');
var serverApi = require('my_modules/serverApi');



var port = 3000;

var dbName = 'frametest';
var dbUser = 'root';
var dbPassword = null;

var sequelize = new Sequelize(dbName, dbUser, dbPassword, {
	 host:'localhost',
	 dialect:'mysql'
});  //creating an instance of the sequelize object.

var Framework = sequelize.define('Framework', {
	name: Sequelize.STRING,
	fork_count: Sequelize.INTEGER,
	references: Sequelize.INTEGER
},
{
	freezeTableName:true
});

Framework.create({
	name:'test',
	fork_count:1021,
	references:12412
});

sequelize.sync();


	// I have just recently read that this is not needed if you are using express
	// app.configure(function(){
	// 	app.use(express.bodyParser());
	// 	app.use(function(response, request, next){
	// 		response.header('Access-Control-Allow-Origin', '*');
	// 		response.header('Access-Control-Allow-Methods','Options');
	// 		response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	// 		next();
	// 	});
	// });


// app.get('/', function(req, res){

// 	https.get("https://api.github.com/search/repositories?q=angular&sort=stars&order=desc", function(res) {
// 	  console.log("Got response: " + res.statusCode);
// 	  var apiResponse = res;

// 	  console.log(apiResponse);

// 		}).on('error', function(e) {
// 	  	console.log("Got error: " + e.messag);
// 	});

//     res.send('completed get request');
//     console.log('are we hitting get');
// });



clientApi();
serverApi();




app.listen(port);
console.log('Server running at ' + port);

