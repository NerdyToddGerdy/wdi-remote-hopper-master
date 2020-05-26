console.log("test");

$(function(){
var $getButton = $('button')
console.log($getButton);
// Get our sketch pad which is the body
var $sketchPad = $('body');

var $input = $('input')
console.log($input);

var randomColor = function(){
    var red = Math.floor(Math.random()* 256);
   var blue = Math.floor(Math.random()* 256);
   var green = Math.floor(Math.random()* 256);
   //console.log("rgb(" + red + "," + green + "," + blue + ")");
   return "rgb(" + red + "," + green + "," + blue + ")";
}

// var rgbRandom = 'rgb('+ randomColor() + ',' + randomColor() +','+ randomColor() + ')'

var changeColor = function(){
  // console.log(rgbRandom);
  $(this).css('background-color', randomColor() )
  console.log($(this).css());
}


console.log(randomColor());

$getButton.on('click',function(){
  $('.square').parent().empty('div')
    for(var i=1; i<=$input.val(); i++){
    // create divs
    var $square = $('<div>');
    // give our square a class of square
    $square.addClass('square');
    $square.on('mouseover',changeColor)
    // attach my square to sketchPad
    $sketchPad.append($square);
  };
})

//create 1000 divs









})
