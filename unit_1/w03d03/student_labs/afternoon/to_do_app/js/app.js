console.log('app.js is connected for To Do List');
$(function(){
//====================================================================
//     GRAB ELEMENTS
//====================================================================

// grabbing the id input-box
var $inputBox = $('#input-box');
var $textInput = $inputBox.val();
// grabbing the button id submit
var $submitButton = $('#submit');
//grab the to-do-list column
var $toDoListColumn = $('#to-do-list')
// console.log($toDoListColumn);
var listItems = [];
var $completedList = $('#completed');
var $btn = $('<button>COMPLETED</button>',function(){
  console.log('this button');
});


var completeCard = function(){
  // console.log($(this).parent());
   $(this).parent().appendTo($completedList).css('background-color','#ED6495');
   $(this).text('REMOVE');
   $(this).on('click',function(){
     $(this).parent().remove()
   })
};

//====================================================================
//     EVENT HANDLERS
//====================================================================
var pressButton = function(){
  var $textInput = $inputBox.val();
  listItems.push($textInput)
  console.log(listItems);
  var $newToDoCard = $('<div>').addClass('to-do-item').html('<p>' + listItems[listItems.length-1] + '</p>')
  // $newToDoCard.append($newItem);
  $('#to-do-list').append($newToDoCard)
  $newToDoCard.append($btn)
  var $btn = $('<button>COMPLETED</button>')
  $btn.on('click',completeCard)
  $newToDoCard.append($btn)
  // $('#input-box').trigger('reset');
}


//====================================================================
//     EVENT LISTENERS
//====================================================================

$submitButton.on('click', pressButton)
$toDoListColumn.append($textInput);
// console.log($toDoListColumn);
$toDoListColumn.append($textInput).addClass('to-do-list');
// console.log($toDoListColumn);

// $btn.on('click', )
// $newToDoCard.append($btn)

});
