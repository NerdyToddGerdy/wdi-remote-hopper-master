var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name:{type: String, required: true},
  description: {type: String, required: true},
  img: String,
  price: Number,
  qty:Number
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
