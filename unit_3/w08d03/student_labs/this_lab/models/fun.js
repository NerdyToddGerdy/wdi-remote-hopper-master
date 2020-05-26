var mongoose = require('mongoose');

var funSchema = mongoose.Schema({
   funThing: String,
   wasFun: Boolean
});

var Fun = mongoose.model('Fun', funSchema);

module.exports = Fun;
