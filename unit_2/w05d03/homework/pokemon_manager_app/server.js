var express = require('express');
var app = express();
var Pokemon = require('./pokemon.js');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));

// INDEX
app.get('/data',function(req, res){
  res.render('index.ejs', {data: Pokemon});
});

app.get('/data/new', function(req, res){
  res.render('new.ejs');
  // res.redirect('/data');
});

//SHOW
app.get('/data/:id', function(req,res){
  // res.send('got something')
  res.render('show.ejs', {
    data: Pokemon[req.params.id]
  });
});

app.post('/data', function(req, res){
  Pokemon.push(req.body);
  console.log(Pokemon);
  res.redirect('/pokemon');
});

app.listen(3000, function(){
  console.log('Here be dragons!!');
});
