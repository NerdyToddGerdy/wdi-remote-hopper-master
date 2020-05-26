var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new mongoose.Schema({
  name: {type: String, required: true},
  founded:Date,
  employees: Number,
  active: Boolean,
  products: [String],
  CEO:{
    name:String,
    age: Number
  }
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;
