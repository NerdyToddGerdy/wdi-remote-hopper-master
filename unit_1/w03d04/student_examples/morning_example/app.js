$(function(){
console.log("test");

// Grab the button
  $btn = $('button');
  console.log($btn);

// event handler
var loggingThis = function(){
  console.log($(this));
  $(this).text("has been clicked")
  $(this).css("background-color",'blue').remove()
}

  //add the event listener
  $btn.on('click',loggingThis)






})
