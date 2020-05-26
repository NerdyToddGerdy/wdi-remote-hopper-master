$(function() {
	$('#start').on('click', startTimer);
	$('#stop').on('click', stopTimer);
	$('#reset').on('click', resetTimer);
	$('#countdown').on('click', countdownTimer);
}); // end window onload


//===================
// EVENT HANDLERS
// ==================
var num = 0
var startTimer = function() {
	// console.log('start timer clicked');
	// etInterval(CALLBACK, NUMBER);

var start = setInterval(function(){
  console.log('...');
  console.log('this is the song that never ends ...');
	num++
	$('#stopwatch').text(num)
}, 1000);
};

var stopTimer = function() {
	var stop = clearInterval()
	console.log(startTimer);
	clearInterval(startTimer);
};

var resetTimer = function() {

};

var countdownTimer = function () {

};
