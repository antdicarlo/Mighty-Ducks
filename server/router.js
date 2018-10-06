var express = require('express') ;
var app = module.exports = express.Router();

//https://stackoverflow.com/questions/35749288/separate-file-for-routes-in-express]

var user = require('./routes/user');
app.use(user);

