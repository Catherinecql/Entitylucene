//This is node js wrapper to elasticsearch

'use strict';

//List the packages 
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
//Create the express application
var app = express();


// Allow CORS so that backend and frontend could be put on different servers
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);

var axios = require('axios');

//add an api endpoint to search
app.get('/search/:username',function(req,res){
	var query_string = req.params.username;
	console.log(req.params);
	// var pattern = username

	/** Qingling Kang's Change **/
	query_string = query_string.split('+').join(' ');
	query_string = query_string.split('$').join('#');
	query_string = query_string.toLowerCase()

	// var pattern = username
	console.log(query_string);
	let url = 'http://localhost:9200/entity_lucene_doc/_search_with_clusters?pretty=true';
	console.log(url)
	let data ={
		'search_request':{
		    'query': query_string,
		    'size': 100
		}
	}  


	// let url = 'http://localhost:9200/entity_lucene/_search_with_clusters?pretty=true';
	// let data ={
	// 	'search_request':{
	// 	    'query':{
	// 	        "match":{
	// 	              "_all" : query_string
	// 	        }
	// 	    },
	// 	    'size': 100
	// 	},
	// 	'query_hint':"",
	// 	'field_mapping':{
	// 		"title":["_source.entityContent", "_source.name", "_source.physicalDoc", "_source.text"]
	// 	}
	// }  
  

	var header = {
		'Content-Type': 'application/json'
	}

	axios.post(url,data,header)
		.then((response)=>{
			// console.log(JSON.stringify(response.data.hits.hits))
			res.json(response.data)

		}) .catch(error=>{
			console.log(error)

	  	});
});


//add an api to read the physical doc files 
app.get('/getPhysicalDoc/:fileName',function(req,res){
	var fileName = req.params.fileName;
	var path ="./Output/"+fileName
	var content;
	fs.readFile(path, "utf8", function read(err, data) {
		if (err) {
			console.log(err);
		}
		content = data;
		res.send(content)
		console.log(content);
	})
	
})

//set port
app.set('port',(process.env.PORT ||7001));

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/staticFiles"));


// Spin up the server
app.listen(app.get('port'),function() {
	console.log('running on port', app.get('port'))
});



