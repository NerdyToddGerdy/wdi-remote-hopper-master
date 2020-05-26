var express = require('express');
var router = express.Router();
var Photo = require('../models/photo.js');
var User = require('../models/user.js');

router.get('/', function(req, res){
  Photo.find({}, function(err, foundPhotos){
    res.render('photos/index.ejs', {
      photos: foundPhotos
    });
  });
});

router.get('/new', function(req, res){
   User.find({}, function(err, foundUsers){
      res.render('photos/new.ejs', {
         users: foundUsers
      });
   });
});

router.post('/', function(req, res){
   User.findOne({'username':req.body.username}, function(err, foundUser){
      console.log(foundUser);
      Photo.create(req.body, function(err, createdPhoto){
         console.log('photo: ' + createdPhoto);
         foundUser.photos.push(createdPhoto);
         foundUser.save(function(err, savedUser){
            res.redirect('/photos');
         });
      });
   });
});

router.put('/:id', function(req, res){
	Photo.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedPhoto){
      User.findOne({'articles._id': req.params.id}, function(err, foundUser){
         foundUser.photos.id(req.params.id).remove();
         foundUser.photos.push(updatedPhoto);
         foundUser.save(function(err, savesUser){
            res.redirect('/photos');
         });
      });
	});
});

router.get('/:id/edit', function(req, res){
	Photo.findById(req.params.id, function(err, foundPhoto){
		res.render('photos/edit.ejs', {
			photo: foundPhoto
		});
	});
});

router.delete('/:id', function(req, res){
  Photo.findByIdAndRemove(req.params.id, function(){
     User.findOne({'articles._id': req.params.id}, function(err, foundUser){
        foundUser.photos.id(req.params.id).remove();
        foundUser.save(function(err, savedUser){
           res.redirect('/photos');
        });
     });
  });
});

router.get('/:id', function(req, res){
   // res.send('this');
  Photo.findById(req.params.id, function(err, foundPhoto){
     User.findOne({'photos._id':req.params.id}, function(err, foundUser){
        res.render('photos/show.ejs',{
        user: foundUser,
        photo: foundPhoto
     });
    });
  });
});


module.exports=router;
