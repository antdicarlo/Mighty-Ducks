var express = require('express'),
    _       = require('lodash'),
   // config  = require('../config'),
    jwt     = require('jsonwebtoken')
    db      = require('../db');
var app = module.exports = express.Router();
var secretKey = "template1234";
function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), /*config.secretKey*/ secretKey, { expiresIn: 60*60*5 });
}

function getUserDB(username, done) {
  //console.log("get user db");
  db.get().query('SELECT * FROM users WHERE Email = ? LIMIT 1', [username], function(err, rows, fields) {
    if (err) throw err;
    done(rows[0]);
  });
}


app.post('/api/user/login', function(req, res) {
  //console.log(req) ;
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }
  getUserDB(req.body.username, function(user){
    if (!user) {
      console.log("user doesn't exist");
      return res.status(401).send("The username does not exist");
    }
    if (user.Password !== req.body.password) {
      return res.status(401).send("The username or password don't match");
    }
    res.status(200).send({
      id_token: createToken(user),
      user:user
    });
   console.log(user); 
    //trackLogin(ipAddress, email, 'test' ) ;
  });
});


app.get('/api/user/verify/', function(req, res) {
 /* if (!req.params.token) {
    return res.status(400).send("No Token");
  } */

   var token = req.headers.auth ;


     jwt.verify(token, secretKey, function (err, decoded){

            if (err){
                console.log(err);
               // req.authenticated = false;
              //  req.decoded = null;
              //  next();
              return res.status(401).send("Invalid Token") ;

            } else {

               // req.decoded = decoded;
               // req.authenticated = true;

               return  res.status(200).send() ;

                //next();
            }
        });

});



app.get('/api/user/check/:username', function(req, res) {
  if (!req.params.username) {
    return res.status(400).send("You must send a username");
  }
  getUserDB(req.params.username, function(user){
    if(!user) res.status(201).send({username: "OK"});
    else res.status(400).send("A user with that username already exists");
  });
});



