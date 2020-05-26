var express = require('express');
var app = express();

app.get('/homer', function(request, response){
  response.send("Doh!");
});

app.get('/marge', function(request, response){
  response.send("<h1>HMMMMMM!</h1>");
});

app.get('/bart', function(request, response){
  response.send("Eat my shorts!");
});

app.get('/lisa', function(request, response){
  response.send("Saxaphone noises!");
});

app.get('/maggie', function(request, response){
  response.send("suck suck suck");
});

app.get('/snowballII', function(request, response){
  response.send("Meow");
});

app.get('/santasLittleHelper', function(request, response){
  response.send("bark!");
});

app.listen(3000 ,function(){
  console.log('Hi diddly Ho Neighbor!');
});
