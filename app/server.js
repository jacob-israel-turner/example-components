var express = require('express');
var app = express();

app.get('/me', function(){
	res.send('Jacob!')
})

app.listen(9001, function(){
	console.log('Listening!')
})