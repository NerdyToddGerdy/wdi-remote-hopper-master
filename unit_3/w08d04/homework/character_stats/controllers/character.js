var express = require('express');
var router = express.Router();
var Character = require('../models/characters.js');

router.get('/', function(req, res){
   Character.find({}, function(err, foundChars){
      res.json(foundChars);
   });
});

router.post('/', function(req, res){
   Character.create(req.body, function(err, createdChar){
      console.log(req.body);
      // console.log(createdChar);
      res.json(createdChar);
   });
});

router.put('/:id', function(req, res){
   Character.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedChar){
      res.json(updatedChar);
   });
});

router.delete('/:id', function(req, res){
   Character.findByIdAndRemove(req.params.id, function(err, deletedChar){
      res.json(deletedChar);
   });
});

module.exports = router;
