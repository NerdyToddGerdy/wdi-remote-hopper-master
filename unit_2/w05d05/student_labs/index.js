var mongoose = require('mongoose');
var db = mongoose.connection;
var Company = require('./company.js');

mongoose.connect('mongodb://localhost:27017/Company');

db.once('open', function(){
  console.log('mongod is now connected!!');
  Company.create({
    name: 'Apple',
    founded: 1976-04-01,
    employees: 2,
    active: false,
    products:['computers'],
    CEO:{
      name: 'Steve Jobs',
      age: 21
    }
  },function(err, company){
    Company.create({
      name: 'Google',
      founded: 1988-09-04,
      employees: 57100,
      active: true,
      products:['search','maps','email'],
      CEO:{
        name: 'Larry Page',
        age: 43
      }
    });
  });

});
