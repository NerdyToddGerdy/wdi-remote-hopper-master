// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// }else {console.log('I did it! I linked jQuery and this js file!');}

// $(function) {//code inside jQuery window onload}); // closes window onload function
var $container = $('<div>');
var $h1 = $('<h1>Hogwarts</h1>');

$container.attr('id','container')
$('body').append($container);
$container.append($h1);

//////////////////////////COMMIT 2///////////////////////
var $h2 = $('<h2>');
$h2.html('Todd Gerdy');
$container.append($h2);

var $h3 = $('<h3>');
$h3.html('Ravenclaw');
$container.append($h3);

var $h4Pet = $('<h4>');
$h4Pet.html('Blubber Butt');
$h4Pet.addClass('micro-whale');
$container.append($h4Pet);

var $h4Wand = $('<h4>');
$h4Wand.html('cow tongue wand')
$container.append($h4Wand);

////////////////////YEAR 3////////////////////

var $ul = $('<ul>');
var $li1 = $('<li>');
var $li2 = $('<li>');
var $li3 = $('<li>');
var $li4 = $('<li>');
var $li5 = $('<li>');
var $li6 = $('<li>');

$ul.attr('storage','trunk');
$li1.html('butter beer');
$li2.html('invisibility cloak');
$li3.html('magic map');
$li4.html('time turner');
$li5.html('leash')
$li6.html('Bertie Bott\'s Every Flavor [Jelly] Beans.')
$li2.addClass('secret');
$li3.addClass('secret');
$li4.addClass('secret');
$li5.addClass('micro-whale');

$container.append($ul)
$ul.append($li1);
$ul.append($li2);
$ul.append($li3);
$ul.append($li4);
$ul.append($li5);
$ul.append($li6);


/////////////////////////// COMMIT 4 ////////////////////
var $h5 = $('<h5>');
var $table = $('<table>');
var $tr1 = $('<tr>');
var $th1 = $('<th>');
var $th2 = $('<th>');

var $trMonday = $('<tr>');
var $trTuesday = $('<tr>');
var $trWednesday = $('<tr>');
var $trThursday = $('<tr>');
var $trFriday = $('<tr>');

var $tdMonday = $('<td>');
var $tdTuesday = $('<td>');
var $tdWednesday = $('<td>');
var $tdThursday = $('<td>');
var $tdFriday = $('<td>');

var $tdMondayClass = $('<td>');
var $tdTuesdayClass = $('<td>');
var $tdWednesdayClass = $('<td>');
var $tdThursdayClass = $('<td>');
var $tdFridayClass = $('<td>');

$h5.html('Spring 2017');
$th1.html('Day');
$th2.html('Classes');

$tdMonday.html('Monday');
$tdTuesday.html('Tuesday');
$tdWednesday.html('Wednesday');
$tdThursday.html('Thursday');
$tdFriday.html('Friday');

$tdMondayClass.html('Herbology');
$tdTuesdayClass.html('Divination');
$tdWednesdayClass.html('History of Magic');
$tdThursdayClass.html('Charms');
$tdFridayClass.html('Potions');



$container.append($h5);
$container.append($table);
$table.append($tr1);
$tr1.append($th1,$th2);

$table.append($trMonday);
$table.append($trTuesday);
$table.append($trWednesday);
$table.append($trThursday);
$table.append($trFriday);

$trMonday.append($tdMonday,$tdMondayClass)
$trTuesday.append($tdTuesday,$tdTuesdayClass)
$trWednesday.append($tdWednesday,$tdWednesdayClass)
$trThursday.append($tdThursday,$tdThursdayClass)
$trFriday.append($tdFriday,$tdFridayClass)

//////////////////// YEAR 5 //////////////////////

$h4Wand.empty();
$li1.remove();
$h4Wand.html('bat-hat wand');
$h4Wand.css('color','gold');

var $sideMission = $('<h3>side mission</h3>')
$container.append($sideMission)
$sideMission.after($h4Pet)
$h3.after($h4Pet)

////////////////// YEAR 6 //////////////////////

$('.secret').hide("slow").delay(2000).show("slow");

$li5.addClass('cabbage');
$li5.removeClass('cabbage');

////////////////// YEAR 7 /////////////////////

$h5.html("Fall 2017")
$li1.html('butter beer');
$ul.prepend($li1);
$ul.attr('storage','chest');











// });
