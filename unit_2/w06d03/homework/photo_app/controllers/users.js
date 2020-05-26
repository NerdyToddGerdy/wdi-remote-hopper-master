var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.get('/', function(req, res){
  User.find({}, function(err, foundUsers){
    res.render('users/index.ejs',{
      users:foundUsers
    });
  });
});

router.get('/new', function(req, res){
  res.render('users/new.ejs');
});

router.get('/:id/edit', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		res.render('users/edit.ejs', {
			user: foundUser
		});
	});
});


router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    res.render('users/show.ejs',{
      user: foundUser
    });
  });
});

router.post('/', function(req, res){
  User.create(req.body, function(err, createdUser){
    res.redirect('/users');
  });
});

router.put('/:id', function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/users/' + req.params.id);
	});
});

router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, function(){
    res.redirect('/users');
  });
});


module.exports=router;
