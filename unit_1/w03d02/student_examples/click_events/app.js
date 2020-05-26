$(function(){

var $btn = $('#btn');
var $btn2 = $('#btn2')

// var addText = function(){
//   console.log('button was clicked!!!!');
//   var $p = $('<p>').text("THE EARTH IS A OBLATE SPHEROID")
//   $('body').append($p);
// };

var changeClass = function() {
  $('body').toggleClass('black');
}

$btn.on('click', changeClass);


$btn.on('click', function(){
  console.log("button was clicked again");
});


$btn2.on('click', changeClass);


});

console.log('app.js');
