var express = require('express'), sass = require('node-sass');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.end('Hello, world!');
});

app.listen(3000);

