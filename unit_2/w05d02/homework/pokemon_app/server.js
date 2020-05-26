var express = require("express");
var app = express();
var pokemon = require("./pokemon.js");

app.get('/pokemon',function(req, res){
  res.render('pokemon/index.ejs', {
    allPokemon: pokemon
  });
});

// app.get('/pokemon', function(req, res){
//   res.send(pokemon);
// });

app.get('/pokemon/:id',function(req, res){
  // res.send(req.params.id);
  res.render('pokemon/show.ejs', {
    allPokemon: pokemon[req.params.id]
  });
});

app.listen(3000, function(){
  console.log('I got myself a nice little server');
});
