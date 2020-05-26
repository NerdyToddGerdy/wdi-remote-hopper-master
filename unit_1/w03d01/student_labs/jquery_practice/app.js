console.log("app.js is connected");


//TOP CONTAINER
var topContainerDiv = $('<div>');
topContainerDiv.attr('id','top-container');
$('body').append(topContainerDiv)

var newHeaderOne = $('<h1>');
newHeaderOne.text("Trois couleurs: rouge, blanc, et blue");
topContainerDiv.append(newHeaderOne);

var couleurDiv = $('<div>');
couleurDiv.addClass('couleur');
topContainerDiv.append(couleurDiv);
couleurDiv.css({'background-color':'red','width':'200px','height':'200px','display':'inline-block'});

var couleurDiv2 = $('<div>');
couleurDiv2.addClass('couleur');
topContainerDiv.append(couleurDiv2);
couleurDiv2.css({'background-color':'white','width':'200px','height':'200px','display':'inline-block'});

var couleurDiv3 = $('<div>');
couleurDiv3.addClass('couleur');
topContainerDiv.append(couleurDiv3);
couleurDiv3.css({'background-color':'blue','width':'200px','height':'200px','display':'inline-block'});

//BOTTOM CONTAINER
var bottomContainerDiv = $('<div>');
bottomContainerDiv.attr('id','bottom-container');
$('body').append(bottomContainerDiv);

var lumpySpacePrincess = $('<h1>Lumpy Space Princess</h1>');
bottomContainerDiv.append(lumpySpacePrincess);

var imgContainerDiv = $('<div id="img-container">');
bottomContainerDiv.append(imgContainerDiv);

var lumpyImage = $('<img>');
lumpyImage.attr('src','http://i.imgur.com/Vzxpd.jpg');
bottomContainerDiv.append(lumpyImage);

newHeaderOne.html('Three colors: red,black, and orange');
couleurDiv2.css('background-color','black');
couleurDiv3.css('background-color','orange');
lumpyImage.css('width','50%');
