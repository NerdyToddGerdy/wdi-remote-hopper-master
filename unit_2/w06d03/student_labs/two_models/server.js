var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var houseController = require('./controllers/house.js');
var roomsController = require('./controllers/rooms.js');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
// app.use('/house', houseController);
app.use('/rooms', roomsController);

app.get('/', function(req, res){
  res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/blog');
mongoose.connection.once('open', function(){
  console.log('connected to mongo');
});

app.listen(3000, function(){
  console.log('listening....');
});
