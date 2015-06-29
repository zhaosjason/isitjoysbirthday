var express = require('express'), sassMiddleware = require('node-sass-middleware');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(sassMiddleware({
    src: __dirname,
    dest: __dirname,
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/prefix'
}));

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index', { 
		title: 'Home' 
	});
});

app.listen(3000);

