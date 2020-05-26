$(function(){
// grab element
var $btn1 = $('#btn1');
var $btn2 = $('#btn2');
var $btn3 = $('#btn3');
var $btn4 = $('#btn4');
var $btn5 = $('#btn5');
var $btn6 = $('#btn6');
var $btn7 = $('#btn7');
var $btn8 = $('#btn8');
var $btn9 = $('#btn9');
var $btn0 = $('#btn0');
var $btnEquals = $('#btnEquals');
var $btnPlus = $('#btnPlus');
var $btnMinus = $('#btnMinus');
var $btnDivide = $('#btnDivide');
var $btnMultiply = $('#btnMultiply');
var $btnClear = $('#btn-clear');

var numberOne = '';
var numberTwo ='';
// handler


var number = function(){
  console.log($(this).text());
  numberOne+=($(this).text())
  console.log(numberOne);
}

var $addition = function(){
  console.log('test addition');
};
var $subtraction = function(){
  console.log('test subtraction');
};
var $multiplication = function(){
  console.log('test multiplication');
};
var $division = function(){
  console.log('test division');
};

// listener

$btnPlus.on('click', $addition);
  // console.log("test");
$btnMinus.on('click', $subtraction);
  // console.log("test");
$btnMultiply.on('click', $multiplication);
  // console.log("test");
$btnDivide.on('click', $division);
  // console.log("test");
$('.numbers').on('click',number)
});
