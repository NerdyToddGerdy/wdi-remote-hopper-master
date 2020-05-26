var express = require('express');
var router = express.Router();
var House = require('../models/houses.js');

router.get('/', function(req, res){
  House.find({}, function(err, foundHouses){
		res.render('houses/index.ejs', {
			houses: foundHouses
		});
	});
});

router.get('/new', function(req, res){
	res.render('houses/new.ejs');
});

router.get('/:id/edit', function(req, res){
	House.findById(req.params.id, function(err, foundHouse){
		res.render('houses/edit.ejs', {
			house: foundHouse
		});
	});
});

router.get('/:id', function(req, res){
	House.findById(req.params.id, function(err, foundHouse){
		res.render('houses/show.ejs', {
			house: foundHouse
		});
	});
});

router.delete('/:id', function(req, res){
  House.findByIdAndRemove(req.params.id, function(){
    res.redirect('/houses');
  });
});

router.put('/:id', function(req, res){
	House.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/houses');
	});
});

router.post('/', function(req, res){
	House.create(req.body, function(err, createdHouse){
		res.redirect('/houses');
	});
});

module.exports = router;
