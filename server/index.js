if (process.env.USING_NOW != 'true')  {
	console.log("not using NOW (Development)") ;
require('dotenv').config() ;
} else {
	console.log("using NOW (production");
}

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var history = require('connect-history-api-fallback'); //used for history mode, clean URLS
app.use(history());


var cors = require('cors');

var db = require('./db');

db.connect();

app.set('port', 3000);

app.use(cors()); //after the line app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use( express.static( __dirname + '/public' ));

app.get( '/', function( req, res ) {
    res.sendFile( path.join( __dirname, 'public', 'index.html' ));
  });

/*
var quotes = require('./routes/quotes');
app.use(quotes);
*/
/*
app.get('/api/test',function(request,response){
  response.end('{"test"}');
  });
 */
 
var router = require('./router');
app.use(router );

app.listen(app.get('port')) ;

console.log('Running App');