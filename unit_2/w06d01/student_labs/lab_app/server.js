var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var Games = require('./models/games.js');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/games', function(req, res){
  Games.find({}, function(error, foundGames){
    console.log(foundGames);
    res.render('index.ejs', {
      games: foundGames
    });
  });
});

app.get('/games/new', function(req, res){
  res.render('new.ejs');
});

app.post('/games', function(req, res){
  if (req.body.ownIt === 'on') {
    req.body.ownIt = true;
  } else {
    req.body.ownIt = false;
  }
  Games.create(req.body, function(){
    res.redirect('/games');
  });
});

app.delete('/games/:id', function(req, res){
  Games.findByIdAndRemove(req.params.id, function(err, data){
    res.redirect('/games');
  });
});

app.get('/games/:id', function(req, res){
  Games.findById(req.params.id, function(err, foundGame){
    console.log(foundGame);
    res.render('show.ejs', {
      game: foundGame
    });
  });
});

mongoose.connect('mongodb://localhost:27017/gaming');
db.once('open', function(){
  console.log('connected to mongo');
});

app.listen(3000, function(){
  console.log('Yes My Master!');
});
