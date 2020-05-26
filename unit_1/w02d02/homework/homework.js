console.log("Commit #1()()()()()()()()()()()()()()()()(()()()()()()())");

//Create an object that has a property that is an array. Log one of the elements of that array.

var pirate = {
  booty: ['dubloons']
}

console.log(pirate.booty[0]);


// Create an array that has an object in it. Log one of the properties of that object.

var vaultHunter = [
  {name:'mordecai'}
]
console.log(vaultHunter[0].name);

//Create an array that has an array as one of its elements. Log one of the elements of the inner array.


var theHeavy = [
  ['Short Change Hero']
]

console.log(theHeavy[0][0]);

console.log("Commit #2 SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");

// Create a function that returns an object. Log a property of that object (hint: call the function and then call a property on the return value).
var yourFace = function(){
  return {
    smells: 'with your nose',
    looks: 'with those eyes'
  }
}

console.log(yourFace().smells);

// Create a function that returns an object that has an object. Log one of the properties of the inner object.

var yourMama = function(){
  return {
    isSo:{mean:'fat',
          nice:'phat'
          }
  }
}

console.log(yourMama().isSo.mean);

// Create a function that returns a function. Call that inner function

var goToNextCommit = function(){
  console.log("Let's do it!");
}
var finishCommit = function(){

  return goToNextCommit();
}

finishCommit();


console.log("Commit #3 <><><><><><><><><><><><><><><><><><><><><><><>");


var functionOne = function(){
  console.log("this is function One");
}

var functionTwo = function(param1){
  console.log("this belongs to functionTwo");
  param1();
}

functionTwo(functionOne);

console.log("Comit #4{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}");

if(true){
  var a = 2 + 2;
  console.log(a);
  }

  if(true){
  if(false){
    console.log('hi');
  }
}

console.log("Commit #5 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

var ofTheWeek = ['1', 4, 7, [1,3,4]];

console.log("Commit #6 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

var bar = function(){
    console.log('bar here');
}

var foo = function(){
    console.log('foo here');
}
bar();
foo();

console.log('Commit #7 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');


// This function loads the name(string) and age(Integer) into
//" name is age years old" as a variable in finalString
var describePerson = function(name, age){
    var finalString = name + " is " + age + " years old.";
    console.log();//This logs nothing
}

console.log("Commit #8 /////////////////////////////////////////////");

// foo();
//
// var foo function(){// this is telling you that there should be an '='
//     console.log('hi');
// }

console.log("Commit #9 =============================================");

var b = parseInt('5');

if(b === 5){ //will be false
    console.log('this line should execute');
}

var a = '5';
console.log(5 + parseInt(a));



/////  I"M GETTING HUNGRY!!!!!!!


// not 1, 4, 5

// Create an object that has a property that is an object. Log one of the properties of that inner object.

var object1 = {
  name:{
    item:'thing1'
  }
}

console.log(object1.name.item);

// Create an object that has a property that is a function (method). Call that method.

var object3 = {
  method: function(){
    console.log("hi");
  }
}

object3.method();

// Create an array that has a function as one of its elements. Call that function.
var function6 = function() {
  console.log('hello');
}
var array6 = [
  function6()
]
array6[0]
//
