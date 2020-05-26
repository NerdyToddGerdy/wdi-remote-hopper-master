var express = require('express');
var app = express();
var charController = require('./controllers/character.js');//indexing route
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/character', charController); // Using route


mongoose.connect('mongodb://localhost:27017/charactercrud');
mongoose.connection.once('open', function(){
   console.log('MONGO! Santa Maria!!');
});

app.listen(3000, function(){
   console.log('Huh? Who\'s there?  Don\'t make me call the cops.  That\'s it. I am going upstairs of my house where there is no exit and trapping myself up there. I hope that noise wasn\'t from that serial killer that has been roaming around this area.');
});
