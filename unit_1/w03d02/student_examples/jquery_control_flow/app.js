$(function(){

  console.log('quilt.js');
  generateQuilt(1000);

});

var generateQuilt = function(numberOfSquares){
  for (var i = 1; i <=numberOfSquares; i++) {
    // console.log(i);
    var $square = $('<div>').addClass('square');
    $square.css('background-color',randColorRGB()).html(i);
    $square.attr('id','square' + i)
    $('body').append($square);
  }
}

var randColorRGB = function(){
  var red = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)
 return"rgb(" + red + "," + green + "," + blue +")";
}


console.log(randColorRGB());
