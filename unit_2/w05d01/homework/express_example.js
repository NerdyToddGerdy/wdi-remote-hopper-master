var express = require('express');
var app = express();

var port = 3000;
app.listen(port,function(){
  console.log('app is running on port:', port);
});

//Greetings
app.get('/greeting/:name', function(req, res){
  res.send('What is up ' + req.params.name);
});

//Tip Calculator
app.get('/tip/:total/:tipPercentage', function(req, res){
  var total = (parseInt(req.params.total));
  var tipPercentage = (parseInt(req.params.tipPercentage));
  var afterTipTotal = total + (0.01 * (total * tipPercentage));
  res.send('After the tip you should get $' + afterTipTotal);
});

//Magic 8 Ball
app.get('/magic/:question', function(req, res){
  var answerArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
  var randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)];
  res.send(randomAnswer);
});

//Fibonacci


// http://stackoverflow.com/questions/20516032/check-the-given-number-belongs-to-fibonacci-sequence-in-node-js

app.get('/fibonacci/:theNumber', function(req, res){
  var theNumber = req.params.theNumber;

  var a = (5 * Math.pow(theNumber, 2) + 4);
  var b=(5 * Math.pow(theNumber, 2) - 4 );

  var result = Math.sqrt(a) % 1===0;
  var result2 = Math.sqrt(b) % 1===0;

  if(result  || result2 === true) { // checks the given input is fibonacci series
    theNumber=Math.round(theNumber * 1.618); // finds the next fibonacci series of given input
    return res.send("Sweet number, dude");
  }
  else{
    return res.send("Brah, I can tell this ain't a fibonacci number. Wack");
  }
});


//Hungry for More
//https//www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/
app.get('/fibonacciIndex/:theNumber', function(req, res){
  var theNumber = req.params.theNumber;

  var looping = function(theNumber){
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= theNumber; i++){
      f = a + b;
      a = b;
      b = f;
    }
    return f;
  };
  res.send(looping(theNumber));
});
