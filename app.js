//dependencies
var express = require('express')
  , http = require('http')
  , path = require('path')
  , sys = require('sys')
  , io = require('socket.io');

//routes
var routes = { 
    home: require('./routes/home.js')
  };

//db stuff
var mongo = require('mongojs');
var collections = ['recipes'];
var db = mongo.connect('osBrew', collections);
var ObjectId = mongo.ObjectId;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('osBrew is Beast!'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.home.index);
app.get('/gallery', routes.home.gallery);
app.get('/contact', routes.home.contact);

app.post('/login',routes.home.login);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
