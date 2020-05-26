console.log('app.js loaded for palette picker');

$(function() {

// Grab the elements
// grab divs
var $colorPalette = $('#color-palette')
var $myPalette = $('#my-palette')

// grab button
var $generateBtn = $('#generate')
//Handlers

var addColor = function(){
  var $chosenColor = $(this).css("background-color");
  var $mySquare = $('<div>').attr('class','square');
  $mySquare.css('background-color',$chosenColor)

  $myPalette.append($mySquare)
}

var makePalette = function(){
  $colorPalette.empty()
  for (var i=1; i <= 150;i++){
    var randomColor = '#' + Math.round(Math.random()*16777215).toString(16);

    var $square = $('<div>').attr('class','square');
    $square.css("background",randomColor)

    // add an event that will call addColor
    $square.on('click', addColor);

    $colorPalette.append($square)
  }
}

$generateBtn.on('click',makePalette)



});
