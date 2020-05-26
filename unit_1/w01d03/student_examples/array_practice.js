// console.log('My array_practice file is running!');
//
//
// var arr = []
// var faveFoods = ["pizza", "dumplings", "hotdogs"];
//
// console.log(faveFoods);


// var ghostBusters1984 = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];
//
// console.log(ghostBusters1984[0]);
// console.log(ghostBusters1984[2]);
// console.log(ghostBusters1984.length);
//
//
// var drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
//
//
// for (var i = 0; i < drSeuss.length; i++) {
//   console.log(drSeuss[i]);
// }
//
// for (var i = 0; i < drSeuss.length; i+=2) {
//   console.log(drSeuss[i]);
// }
//
// for (var i = 1; i < drSeuss.length; i+=2) {
//   console.log(drSeuss[i]);
//   console.log(i);
// }

// var looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// for (var i = 0; i < looneyTunesChars.length; i+= 2) {
//   if(i % 2 == 0) {
//     console.log(looneyTunesChars[i]);
//   }
// }
//
// for (var i = 0; i < looneyTunesChars.length; i++) {
//   if(i % 2 === 0 || i === 3) {
//     console.log(looneyTunesChars[i]);
//   }
// }
//
// for (var i = 0; i < looneyTunesChars.length; i++) {
//   if(i % 2 !== 0)
//     console.log(looneyTunesChars[i]);
// }

// var numbers = [21, 18, 5, 3, 2, 1, 1];
//
// numbers[2] = null;
// console.log(numbers);
//
// numbers[0] *= 10;
// console.log(numbers);


// var faves = ["House","NCIS"];
// faves.push("Samurai Jack");
// console.log(faves);
// // var moreFave = faves.sort();
// // console.log(moreFave);
// // var evaFerom = faves.reverse();
// // console.log(evaFerom);
// // faves.pop();
// // console.log(evaFerom);
// console.log(faves);
// faves.shift();
// console.log(faves);
// faves.unshift("Ren and Stimpy");
// console.log(faves);
//
//
// var runDMC = ["Run", "DMC", "Jam Master Jay"];

// var pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
//
// console.log(pairs[1][0]);

var quotes =["yes", "no", "maybe"];

var randomThings = [1, 10, "Hello", true];


var num = 0;
if (num<5) {
  console.log("little number")
} else if (num>10) {
  console.log("big number")
} else {
  console.log("monkey");
}

var kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
var thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

 console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
