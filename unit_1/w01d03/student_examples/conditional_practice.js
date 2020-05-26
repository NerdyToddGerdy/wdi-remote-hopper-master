// ProCheck: Add a console.log at the beginning of your javascript files to ensure that they are running.

// console.log('My conditional_practice file is running!');

// var sunny = true;
// var notSunny = false;
//
// console.log(sunny);
// console.log(notSunny);

// var toggle = true;
// console.log("this is toglle " + toggle);
// toggle = !toggle;
// console.log("this is toggle " + toggle);
// toggle = !toggle;
// console.log("this is toggle " + toggle);

// var a =true;
// var b = false;
//
//
// console.log(Boolean(8>1 && true || false));

// var name = "Kermit";
// console.log(name);
// if(name === "Kermit") {
//   console.log("Hi ho! Kermit the frog here.");
//
// cars = ["Chevy", "Audi", "Nissan", "Toyota", "Lexus", "Tesla"];
//
// for (i = 0; i < cars.length; i++) {
//   if (i%2 !== 0) {
//     console.log(cars[i]);
//   }
// }
//
// var firstVariable = "Hello World";
// firstVariable = 11;
// var secondVariable = firstVariable;
// secondVariable = "a string";
//
// var animal = "cow";
//
// if (animal == "cow") {
//   console.log("mooooo");
// }
//
// var personAge = 16
// if (personAge >= 16) {
//   console.log("Here are the keys");
// } else {
//   console.log("Sory, you're to young.");
// }
//
// for(i=0;i<11;i++) {
//   console.log(i);
// }
//
// for (var i = 10; i <= 4000; i++) {
//   console.log(i);
// }
//
// for (var i = 10; i <=4000; i+=2) {
//   console.log(i);
// }
//
// var bankaccount = 0;
//
// for (i=1; i<=100; i++){
//   bankaccount += i;
//   // bankaccount *= 2;
// }
// console.log("Your bank account has $" + (bankaccount*2));


var totals = 0
for (i=1; i<1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(totals + " +" + i + " =");
    totals += i;
    console.log(totals);
  } else if (i % 3 == 0) {
    totals += i;
  } else if (i % 5 == 0) {
    totals += i;
  }
  // if (i % 5) {
  //   totals += i;
  //   console.log(totals);
  // }
}
console.log(totals + "end");
