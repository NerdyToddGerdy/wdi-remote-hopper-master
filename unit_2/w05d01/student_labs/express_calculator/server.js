var express = require('express');
var app = express();

var port = 3000;
app.listen(port, function(){
  console.log('app is running on port: ', port);
});

app.get('/calc/:num1/:num2',function(req, res){
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var add = function(num1, num2){
      var sum = num1 + num2;
      res.send("the sum is " + sum);
    };
    add(num1, num2);
});


app.get('/someroute', function(req, res){
  {
    console.log('req.query: ', req.query);
    res.send('someroute accessed');
  }
});

app.get('/calcquery/:num1/:num2', function(req, res){
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  if (req.query.operator === 'add') {
    var sum = num1 + num2;
    res.send("the sum is " + sum);
  }else if (req.query.operator === 'subtract') {
    var sub = num1 - num2;
    res.send("the difference is " + sub);
  } else if (req.query.operator === 'multiply'){
    var mult = num1 * num2;
    res.send("the muliplication is " + mult);
  } else if (req.query.operator === 'divide') {
    var div = num1 / num2;
    res.send('divide is ' + div);
  } else{
    res.send('nada');
  }
  // add(num1, num2);
});
