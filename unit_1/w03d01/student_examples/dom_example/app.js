console.log('#');

var img = $('#first-img');
// var img = document.querySelector('#first-img')

// console.log(img);

var sections = $('.info');

// var sections = document.querySelectorAll('info');

var newElem = $('<div>');
console.log(newElem);

newElem.text('things')

$('body').append(newElem);

var newSection = $('<section>');
newSection.addClass('info');
var newP = $('<p>this is a paragraph</p>');
var newImg = $('<img>');
newImg.attr('id','third-img').attr('src','http://blog.hometheatergear.com/wp-content/uploads/2013/10/shutterstock_119091769.jpg');
$('#container').css('background-color','firebrick');
$('.info').css('color','white')
newImg.css('width','92%')

$('body').append(newSection);
newSection.append(newP);
newSection.append(newImg);
