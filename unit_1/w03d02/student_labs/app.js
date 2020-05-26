$(function(){

  console.log('quilt.js');





  // for (var j = 1; j <= ; i++) {
  //   array[i]
  // }
makeSquare();



});

var makeSquare = function(){

  for (var container = 1; container <=8; container++) {
    var $container = $('<div>');
    $container.addClass('container')
    $('body').append($container)
    if (container%2===0) {
      $container.css('flex-direction','row-reverse')
    }
    for (var i = 1; i <= 8; i++) {
      var $square = $('<div>');
      $square.addClass('square').attr('id','square' + i)
      $container.append($square)
      if (i%2===0) {
        $square.css('background-color','black')
      }
    }
  }

}
