var express = require('express');
var app = express();
var mongoose = require('mongoose');

var funController = require('./controllers/funController.js');
app.use('/fun', funController);

mongoose.connect('mongodb://localhost:27017/fun');
mongoose.connection.once('open', function(){
   console.log('MONGO! Santa Maria');
});

app.listen(3000, function(){
   console.log('listening now');
});
