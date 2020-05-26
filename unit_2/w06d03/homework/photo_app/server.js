var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var userController = require('./controllers/users.js');
var photoController = require('./controllers/photos.js');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
// app.use('/authors', authorsController);
app.use('/users', userController);
app.use('/photos', photoController);

app.get('/', function(req, res){
  res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/photo_album');
mongoose.connection.once('open', function(){
  console.log('Mongo? Santa Maria!!');
});

app.listen(3000, function(){
  console.log('and so it begins');
});
