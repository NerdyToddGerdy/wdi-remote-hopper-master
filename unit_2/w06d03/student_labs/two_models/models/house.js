var mongoose = require('mongoose');

var houseSchema = mongoose.Schema({
	title:String,
	owner:String
});

var House = mongoose.model('House', houseSchema);

module.exports = House;
