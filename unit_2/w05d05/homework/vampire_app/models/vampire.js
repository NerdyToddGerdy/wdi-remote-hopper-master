var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vampireSchema = new Schema({
  //Write your schema fields hear
  name: {type: String, required: true, unique: true},
  hair_color: {type: String, default: 'blonde'},
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  victims: {type: Number, min: 0}
});

var Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;
