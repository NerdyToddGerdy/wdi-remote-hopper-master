var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var Items = require('./models/item.js');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/inventory', function(req, res){
  Items.find({}, function(error, foundItem){
    console.log('index page');
    res.render('index.ejs', {
      items: foundItem
    });
  });
});

app.get('/inventory/new', function(req, res){
  res.render('new.ejs');
});

app.get('/inventory/:id', function(req, res){
  Items.findById(req.params.id, function(err, foundItem){
    console.log(foundItem);
    res.render('show.ejs', {
      items: foundItem
    });
  });
});

app.get('/inventory/:id/edit', function(req, res){
  Items.findById(req.params.id, function(error, foundItem){
    res.render('edit.ejs', {
      items:foundItem
    });
  });
});

app.delete('/inventory/:id', function(req, res){
  Items.findByIdAndRemove(req.params.id, function(err, data){
    res.redirect('/inventory/');
  });
});

app.get('/inventory/:id/edit', function(req, res){
  Items.findById(req.params.id, function(error, foundItem){
    res.render('edit.ejs', {
      items:foundItem
    });
  });
});

app.put('/inventory/:id/buy', function(req, res){
  Items.findByIdAndUpdate(req.params.id,{$inc: {qty:-1}}, function(err, updatedModel){
    res.redirect('/inventory/' + req.params.id);
  });
});

app.put('/inventory/:id', function(req, res){
  Items.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updateModel){
    res.redirect('/inventory/' + req.params.id);
  });
});

app.post('/inventory', function(req, res){
  Items.create(req.body, function(){
    res.redirect('/inventory');
  });
});

app.get('/seed/newproducts', function(req, res) {
	var newProducts = [
		{
			name: "Beans",
			description: "A small pile of beans. Buy more beans for a big pile of beans.",
	        img: "https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2",
			price: 5,
			qty: 99
		}, {
			name: "Bones",
			description: "It's just a bag of bones.",
    	    img: "http://bluelips.com/prod_images_large/bones1.jpg",
			price: 25,
			qty: 0
	  }, {
			name: "Bins",
			description: "A stack of colorful bins for your beans and bones.",
    	    img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
			price: 7000,
			qty: 1
	  }
	];
	Items.create(newProducts, function(err) {
		  console.log("SEED: NEW PRODUCTS CREATED!");
		  res.redirect('/inventory');
	});
});

mongoose.connect('mongodb://localhost:27017/shop');
db.once('open', function(){
  console.log('connected to mongo');
});

app.listen(3000, function(){
  console.log('I be here');
});
