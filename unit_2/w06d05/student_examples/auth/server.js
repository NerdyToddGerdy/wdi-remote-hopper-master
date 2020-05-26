var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');

app.use(methodOverride('_method'))
app.use(session({
   secret: "feedmeseymour",
   resave: false,
   saveUnintialized: false
}));

app.use(bodyParser.urlencoded({extended:false}));

var usersController = require('./controllers/users.js');
app.use('/users', usersController);

var sessionController = require('./controllers/sessions.js');
app.use('/sessions', sessionController);

app.get('/', function(req, res){
   console.log(req.session);
   res.render('index.ejs', {
      currentUser: req.session.currentuser
   });
});

app.get('/app', function(req, res){
   if(req.session.currentuser !== undefined){
      res.send('the party');
   } else {
      res.redirect('/sessions/new')
   }
});

mongoose.connect('mongodb://localhost:27017/auth');

mongoose.connection.once('open', function(){
   console.log('Mongo!! Santa Maria');
});

app.listen(3000, function(){
   console.log('listening...');
});
