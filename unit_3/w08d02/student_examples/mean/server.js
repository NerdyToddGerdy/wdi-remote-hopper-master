var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/data', function(req, res){
   res.json({
      name: 'Todd'
   });
});

app.post('/data', function(req, res){
   console.log(req.body);
   res.json({
      success:true
   });
});

app.listen(3000, function(){
   console.log('listening');
});
