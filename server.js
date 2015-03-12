var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/me', function(req, res){
	res.send('Jacob!')
})

app.listen(9001, function(){
	console.log('Listening!')
})