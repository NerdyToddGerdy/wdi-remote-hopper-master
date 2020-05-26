var express = require('express');
var app = express();

var superheroes = [
  {
    name:'batman',
    powers: 'utility belt'
  },
  {
    name:'superman',
    powers: 'see lab notes'
  },
  {
    name:'hulk',
    powers: 'gamma radiation'
  }
];

app.get('/superheroes', function(req, res){
  res.send(superheroes);
});

app.get('/superheroes/:index', function(req, res){
  console.log(req.params.index);
  res.send(superheroes[req.params.index]);
});

app.listen(3000, function(){
  console.log('yes Milord?');
});
