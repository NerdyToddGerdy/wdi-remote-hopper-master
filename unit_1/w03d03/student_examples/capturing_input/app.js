$(function(){

console.log("test");

// Grab input box element
var $inputBox = $('#input-box')
console.log($inputBox);

//Grab the submit button
var $submitButton = $('#submit-button');

var $newDiv = $("<div>")


$submitButton.on('click', function(){
  var $outputBox = $('<p></p>')
  var $reply = $inputBox.val()
  $outputBox.html($reply);
  $('body').append($outputBox)
  $('form').trigger('reset');
})


})
