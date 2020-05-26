$(function() {
//Grab Element
var $addButton = $('#add-card')




//Event Handlers
var getDataAndCreateCard = function(){
  var $userInput = $('#user-form');
  // Save text input to a var
  var $textInput = $userInput.val();
  //create a card
  var $newCard = $('<div class="card"></div>')
  var removeCard = function(){
    console.log($(this).parent());
  }

  //add our text to our new card
  $newCard.html($textInput);

  var $removeButton = $('<button>').text('remove').attr('id','removeCard')

  $remove.on('click',removeCard)

  $newCard.append($removeButton)

  var $currentList = $(this).parent();

  //append new card to List
  $currentList.append($newCard);

  $('#user-form').trigger('reset');
}



//Event Listeners
$addButton.on('click',getDataAndCreateCard)

  console.log('I Live');
})
