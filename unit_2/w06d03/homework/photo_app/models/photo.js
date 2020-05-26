var mongoose = require('mongoose');


// photo schema
var photoSchema = mongoose.Schema({
  username: {type:String, required: true},
  img: {type: String, required: true},
  // photos:[Photo.schema]
});

// photo model
var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
