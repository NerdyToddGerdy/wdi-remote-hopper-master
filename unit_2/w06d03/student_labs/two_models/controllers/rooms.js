var express = require('express');
var router = express.Router();
var Room = require('../models/rooms.js');

router.get('/', function(req, res){
  Room.find({}, function(err, foundRooms){
    res.render('rooms/index.ejs', {
      rooms: foundRooms
    });
  });
});

router.get('/new', function(req, res){
  res.render('rooms/new.ejs');
});

router.post('/', function(req, res){
  Room.create(req.body, function(err, createdRoom){
    res.redirect('/rooms');
  });
});

router.put('/:id', function(req, res){
	Room.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/rooms');
	});
});

router.get('/:id/edit', function(req, res){
	Room.findById(req.params.id, function(err, foundRoom){
		res.render('rooms/edit.ejs', {
			room: foundRoom
		});
	});
});

router.delete('/:id', function(req, res){
  Room.findByIdAndRemove(req.params.id, function(){
    res.redirect('/rooms');
  });
});

router.get('/:id', function(req, res){
  Room.findById(req.params.id, function(err, foundRoom){
    res.render('rooms/show.ejs',{
      room: foundRoom
    });
  });
});

module.exports = router;
