var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var allPokemon = require('./models/pokemon.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/pokedex/', function(req, res){
  res.render('index.ejs',{
    theFirst151: allPokemon
  });
});

app.get('/pokedex/new', function(req, res){
  res.render('new.ejs');
});

app.get('/pokedex/:index/edit', function(req, res){
  res.render('edit.ejs', {
      index: req.params.index,
    theFirst151: allPokemon[req.params.index]
  });
});

app.get('/pokedex/:index', function(req, res){
  res.render('show.ejs', {
    theFirst151: allPokemon[req.params.index],
    thisPokemon: req.params.index
  });
});



app.post('/pokedex', function(req, res){

  var createdPokemon = req.body;

for (var key in createdPokemon){
  console.log(key, ':', createdPokemon[key]);
}


console.log(req.body);
///////////////////
  allPokemon.push(createdPokemon);
  var lastPokemon = allPokemon[allPokemon.length-1];
  res.redirect('/pokedex');
});

app.put('/pokedex/:index', function(req, res){
  allPokemon[req.params.index] = req.body;
  res.redirect('/pokedex');
});

app.delete('/pokedex/:index', function(req, res){
  allPokemon.splice(req.params.index,1);
  res.redirect('/pokedex');
});

app.listen(3000, function(){
  console.log('I am here to help you catch em all.');
});
