var express = require('express');
var app = express();
var games = require('./models/items.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/games', function(req, res){
  res.render('index.ejs', {
    games:games
  });
});

app.get('/games/new', function(req, res){
  res.render('new.ejs');
});

app.get('/games/:id/edit', function(req, res){
  res.render('edit.ejs', {
    game:games[req.params.id],
    id: req.params.id
  });
});

app.get('/games/:id', function(req,res){
  res.render('show.ejs', {
    game:games[req.params.id]
  });
});

app.delete('/games/:id', function(req, res){
  games.splice(req.params.id,1);
  res.redirect('/games');
});

app.post('/games', function(req, res){
  games.push(req.body);
  res.redirect('/games');
});

app.put('games/:id', function(req, res){
  games[req.params.id] = req.body;
  res.redirect('/games');
  console.log(req.body);
});

app.listen(3000, function(){
  console.log('Yes! Milord?');
});
