// user Schema

var mongoose = require('mongoose');
var Photo = require('./photo.js');

var userSchema = mongoose.Schema({
  username: {type:String, required: true, unique: true},
  password: {type:String, required:true},
  photos: [Photo.schema]
});

// user model

var User = mongoose.model('User', userSchema);

module.exports = User;
