var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  name: {type: String, required: true},
  system: {type: String, required: true},
  ownIt: Boolean
});

var Game = mongoose.model('Game', gameSchema);

module.exports = Game;
