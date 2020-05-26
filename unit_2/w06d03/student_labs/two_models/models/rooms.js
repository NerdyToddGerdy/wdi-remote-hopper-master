var mongoose = require('mongoose');
var roomSchema = mongoose.Schema({
  name: String
});

var room = mongoose.model('Room', roomSchema);

module.exports = room;
