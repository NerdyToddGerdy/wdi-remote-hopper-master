var mongoose = require('mongoose');

var characterSchema = mongoose.Schema({
   name: String,
   race: String,
   hp: Number,
   mp: Number,
   xp: Number
});

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;
