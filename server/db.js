var mysql = require('mysql');
var pool  = null;

exports.connect = function() {
  console.log('connecting');
  pool = mysql.createPool({
    host     : '',
    user     : '',
    password : '',
    database : '',
    debug:false
  });
}

exports.get = function() {
  return pool;
}

