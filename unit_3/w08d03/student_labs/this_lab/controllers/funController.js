var express = require('express');
var router = express.Router();
// var Todos = require('../models/todos.js');

router.get('/', function(req, res){
   res.send('test');
});

module.exports = router;
