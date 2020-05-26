console.log("test");

// Add the window onload for jQuery
$(function(){

var selectedInitials = [];

//Grab element
var $alphabetLetters = $('.alphabet');
console.log($alphabetLetters);

//set event handler

// var logLetter = function(){
//   console.log($(this).html());
//   var $initial = ($(this).text())
//   selectedInitials.push($initial)
//   console.log(selectedInitials);
// }

var getParent = function(){
  console.log($(this).parent());
  var parentElement = ($(this).parent())
  parentElement.css('background-color', 'yellow')
  $(this).css('background-color','lightblue')
}
// Set Event Listeners
$alphabetLetters.on('click',getParent);
})
