console.log("tic tac toe app.js is connected");
$(function(){
  //====================================================================
  //     GRAB ELEMENTS
  //====================================================================

  //Grab the button
  var $clearBtn = $('#clear-board');

  //Grab the board div and add the ID of board, and give it css of background and height/width of 800 px. also appends
  var $board = $('<div>').attr('id',"board").css({
    'height':'800px','width':'800px','background-color':'green','display':'flex',
    'justify-content': 'space-around','flex-flow': 'row wrap'});
    $('body').append($board);






    //====================================================================
    //     EVENT HANDLERS
    //====================================================================

    // hears the click
    var clearBtnClicked = function(){
      $board.children().remove()
      toggleLetter=true;
      // console.log("button done did werk")
      start()
    }

    var toggleLetter = true;

    //Show the X

      var showLetter = function(){
        // $(this).text('X').css({'text-align':'center','font-size':'8em','line-height':'250px'})
        // console.log('clicked');
        if (toggleLetter === true) {
          $(this).text('X').css({'text-align':'center','font-size':'8em','line-height':'250px'})
          toggleLetter = false
          $(this).off('click',showLetter);
        } else {
          $(this).text('O').css({'text-align':'center','font-size':'8em','line-height':'250px'})
          toggleLetter = true;
          $(this).off('click',showLetter);
        }
        // console.log(toggleLetter);
      }




    //====================================================================
    //     EVENT LISTENERS
    //====================================================================

    //listen for Clear button
    $clearBtn.on('click',clearBtnClicked);


    var start = function(){
      // for loop to write squares to HTML
      for (var i = 1; i <= 9; i++) {
        var $squareDiv = $('<div>').addClass('square').css({'background-color':'blue',"width":'259px','height':'259px','border':'2px solid black'});
        $board.append($squareDiv);

        //Event listener for the squares
        $squareDiv.on('click',showLetter)
      }
    }

    start();
  });


// var rows=[
//   [a,b,c],
//   [d,e,f],
//   [g,h,i]
// ]
//
//
// if (a==b==c){
//   console.log("they equal");
// } else {
//   console.log("not so much");
// }
//
//


































// running the program
