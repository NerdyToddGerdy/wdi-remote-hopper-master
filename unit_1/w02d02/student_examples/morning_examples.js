// var foo = {
//   someArray: [1,2,3]
// };
//
// console.log(foo.someArray[0]);

// var person = {
//   age:36,
//   greet: function(){
//       console.log('hello');
//   }
// }
//
// person.greet();

// var groceryList = [
//   {
//     name:'pear',
//     color:'green'
//   },
//   {
//     name:'banana',
//     color:'yellow'
//   },
//   {
//     name:'apple',
//     color: 'red'
//   }
// ];
// groceryList.push({name:'shampoo', color:'green'});
// console.log(groceryList[3].color);

// var someArray = [
//   1,
//   true,
//   "my string",
//   ["bar","apple",3.5]
// ];
//
// console.log(someArray[3][1]);

// var something = function(){
// }
// var foo = [
//   1,
//   'hi',
//   function(){
//     return 'fun'
//   },
// ]
// // console.log(foo[2]());
//
// var groceryList = {
//   assignee: 'kids',
//   date: 'now',
//   items: ['apples', 'pears', 'bananas']
// }
//
// for (var i = 0; i < groceryList.items.length; i++) {
//   console.log(groceryList.items[i]);
// }

// var someArray = [
//   1,
//   true,
//   "my string",
//   ["bar","apple",3.5]
// ];
//
// for (var i = 0; i < someArray[3].length; i++) {
//   console.log(someArray[3][i]);
// }


var matrix = [
  ['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2'],
]
//
//
//
for (var outerArrayIndex = 0; outerArrayIndex < matrix.length; outerArrayIndex++) {
  for (var innerArrayIndex = 0; innerArrayIndex < matrix[outerArrayIndex].length; innerArrayIndex++) {
    console.log(matrix[outerArrayIndex][innerArrayIndex]);
  }
}


// var foo = function(){
//   return{
//     someProperty: 'hi!'
//   }
// };
//
// console.log(foo().someProperty);

// var foo = function(){
//   return ['apple','pear','banana'
// ]}
//
// console.log(foo()[1]);


// var generateList = function(){
//   return {
//     assignee: 'kids',
//     when: 'now',
//     items: ['apple','pear','banana']
//   }
// }
//
// console.log(generateList().items[1]);

// var generateHuman = function(){
//   return {
//     features: {
//       age: 'some value'
//     }
//   }
// }
//
// console.log(generateHuman().features.age);

// var generateHuman = function() {
//   return {
//     greet: function(){
//       console.log('hi');
//     }
//   }
// }
//
// generateHuman().greet();

// var generateFunction = function(){
//   return function(){
//     console.log("whaaaa?");
//   };
// }
//
// generateFunction()();

// var human = {
//   generateHuman: function(){
//     return {
//       eyeColor: 'blue'
//     }
//   }
// }
//
// var child = human.generateHuman();
// console.log(human.generateHuman().eyeColor);
//
// var foo = {
//   someMethod: function(){
//     return {
//       someArray: ['peach', 'apple', 'pear']
//     }
//   }
// }
//
// console.log(foo.someMethod().someArray[1]);

// var foo = {
//   someMethod: function(){
//     return {
//         someObject: {
//           someProperty: 'some value'
//         }
//     }
//   }
// }
//
// console.log(foo.someMethod().someObject.someProperty);
//
// var foo = {
//   generateObject: function(){
//     return {
//       greet: function(){
//         console.log('hi');
//       }
//     }
//   }
// }
//
// foo.generateObject().greet();
//
// var foo = {
//   someMethod: function(){
//     return function(){
//       console.log('hi');
//     }
//   }
// }
//
// foo.someMethod()();

var cousinVinny = function(nameOfCaller){
  console.log("I got you " + nameOfCaller);
  console.log("Youts");
}
// var monaLisa = function(){
//   console.log("That's a trick question!");
// }
// var billGambini = function(callBack){
//   console.log("Help, I'm in jail");
//   callBack("Bill");
//   console.log("Thanks, helper!");
// }
var stanRothenstein = function(callBack){
  console.log("I'm not the cousin");;
//   // callback("Stan");
// }
stanRothenstein(cousinVinny)

// billGambini(function(){
//   console.log('Tire tracks');
// });

// setTimeout(function(){
//   var a = 2+2;
//   console.log(a);
// },2000)








































var a = 2 + 2;
debugger;
a *=3;
a--;
debugger;
console.log('hi');
console.log(a);
