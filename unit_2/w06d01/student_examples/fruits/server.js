var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var Fruits = require('./models/fruits.js');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/fruits', function(req, res){
  Fruits.find({}, function(error, foundFruits){
    console.log(foundFruits);
    res.render('index.ejs', {
      fruits: foundFruits
    });
  });
});

app.get('/fruits/new', function(req, res){
  res.render('new.ejs');
});

app.post('/fruits', function(req, res){
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruits.create(req.body, function(){
    res.redirect('/fruits');
  });
});

app.get('/fruits/:id', function(req, res){
  Fruits.findById(req.params.id, function(err, foundFruit){
      console.log(foundFruit);
      res.render('show.ejs', {
        fruit: foundFruit
      });
  });
});

mongoose.connect('mongodb://localhost:27017/basiccrud');
db.once('open', function(){
  console.log('connected to mongo');
});
app.listen(3000, function(){
  console.log();
});
