$(function() {


var addMovie = function(){
  console.log('clicked');
  $inpValue = $('#input-box').val()
  console.log($inpValue);

  $.ajax('http://www.omdbapi.com/?t=' + $inpValue).done(function(stuff){
    console.log(stuff);
    $img = $('<img>').attr('src',stuff.Poster);
    $div = $('<div>').attr('id','container')
    .html('<p>' + stuff.Year + '</p><p>' + stuff.Director + '</p><h1>' + stuff.Title + '</h1>')
    $('body').append($div);
    $div.append($img);
  })

}




$('#input-submit').on('click', addMovie)

// $.ajax('http://www.omdbapi.com/?t=hot+fuzz')
// .done(function(result){
//   console.log(result.Poster);
//   $img = $('<img>').attr('src',result.Poster);
//   $('body').append($img)
// })
}); // end window onload
