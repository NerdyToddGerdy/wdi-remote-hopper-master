// console.log("11111111111111111111111111111111111111111111111");
//
//
// //datatypes
// //1. boolean
// var lightSwitchOn = true;
//
// //2.I was use string to show the email
//
// var userEmail = "e@mail.com";
//
// //3. I will use an array
//
// var spashipParts = ["hull", "laser beams", "laser blasters, tractor beam, warp drive"];
//
// //4. I will use an object for the student names
// var student = {
//   name: "nano",
//   name: "Todd",
//   name: "Anthony",
//   name: "Hanna"
// }
//
// //5. I will use arrays inside objects
// var nameWithLocation = [
//   {name: "nano",location: "world wide web"},
//   {name: "Todd",location: "here"},
//   {name: "Anthony",location: "Hot-Lanta"},
//   {name: "Hanna",location: "Big Apple"},
// ]
//
// //6. an array with an objects with an array
// var nameLocationShows = [
//   {name: "nano",location: "",tvShows: []},
//   {name: "Todd",location: "",tvShows: []},
//   {name: "Anthony",location: "",tvShows: []},
//   {name: "Hanna",location: "",tvShows: []}
// ]
//
// console.log("2222222222222222222222222222222222222222222222");
//
// var monkeys = [
//   {name: "George", species: "first", foodsEaten: ["soup","salad","tacos"], favoriteColors: {bright: "red", dull:"green"}},
//   {name: "Caesar", species: "second", foodsEaten: ["toothpaste","tomato paste","denture paste"], favoriteColors: {bright: "Blue", dull: "yellow"}},
//   {name: "Kong", species: "third", foodsEaten: ["bread", "pita", "oat"], favoriteColors: {bright:"teal",dull:"pink"}},
// ]
//
// console.log("333333333333333333333333333333333333333333333333333");
//
// for (i=0; i<monkeys.length; i++) {
//   console.log(monkeys[i]);
// }
// console.log("3.2 3.2 3.2 3.2 3.2");
// console.log(monkeys[0]);
//
// console.log("3.3 3.3 3.3 3.3 3.3");
// console.log(monkeys[1].foodsEaten);//he's not a very smart monkey
//
// console.log("3.4 3.4 3.4 3.4 3.4");
// var monkey_names = []
//
// for (var i = 0; i < monkeys.length; i++) {
//   monkey_names.push(monkeys[i].name);
//   console.log(monkey_names);
// }
// console.log(monkey_names);
//
// console.log("3.5 3.5 3.5 3.5 3.5");
//
// var monkey_colors = []
// for (var i = 0; i < monkeys.length; i++) {
//   monkey_names.push(monkeys[i].favoriteColors);
//   console.log(monkey_names);
// };
//
//
//
// console.log("4444444444444444444444444444444444444444444444444444444");
//
// var inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Mallorie"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }
//
// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
//
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

console.log("555555555555555555555555555555555555555555555555555555");


var bondFilms = [
  { title : "Skyfall", year : 2012, actor : "Daniel Craig", gross : "$1,108,561,008" },
  { title : "Thunderball", year : 1965, actor : "Sean Connery", gross : "$1,014,941,117" },
  { title : "Goldfinger", year : 1964, actor : "Sean Connery", gross : "$912,257,512" },
  { title : "Live and Let Die", year : 1973, actor : "Roger Moore", gross : "$825,110,761" },
  { title : "You Only Live Twice", year : 1967, actor : "Sean Connery", gross : "$756,544,419" },
  { title : "The Spy Who Loved Me", year : 1977, actor : "Roger Moore", gross : "$692,713,752" },
  { title : "Casino Royale", year : 2006, actor : "Daniel Craig", gross : "$669,789,482" },
  { title : "Moonraker", year : 1979, actor : "Roger Moore", gross : "$655,872,400" },
  { title : "Diamonds Are Forever", year : 1971, actor : "Sean Connery", gross : "$648,514,469" },
  { title : "Quantum of Solace", year : 2008, actor : "Daniel Craig", gross : "$622,246,378" },
  { title : "From Russia with Love", year : 1963, actor : "Sean Connery", gross : "$576,277,964" },
  { title : "Die Another Day", year : 2002, actor : "Pierce Brosnan", gross : "$543,639,638" },
  { title : "Goldeneye", year : 1995, actor : "Pierce Brosnan", gross : "$529,548,711" },
  { title : "On Her Majesty's Secret Service", year : 1969, actor : "George Lazenby", gross : "$505,899,782" },
  { title : "The World is Not Enough", year : 1999, actor : "Pierce Brosnan", gross : "$491,617,153" },
  { title : "For Your Eyes Only", year : 1981, actor : "Roger Moore", gross : "$486,468,881" },
  { title : "Tomorrow Never Dies", year : 1997, actor : "Pierce Brosnan", gross : "$478,946,402" },
  { title : "The Man with the Golden Gun", year : 1974, actor : "Roger Moore", gross : "$448,249,281" },
  { title : "Dr. No", year : 1962, actor : "Sean Connery", gross : "$440,759,072" },
  { title : "Octopussy", year : 1983, actor : "Roger Moore", gross : "$426,244,352" },
  { title : "The Living Daylights", year : 1987, actor : "Timothy Dalton", gross : "$381,088,866" },
  { title : "A View to a Kill", year : 1985, actor : "Roger Moore", gross : "$321,172,633" },
  { title : "License to Kill", year : 1989, actor : "Timothy Dalton", gross : "$285,157,191" }
];

// var bondTitles = []
//
// for (var i = 0; i < bondFilms.length; i++) {
//   bondTitles.push(bondFilms[i].title);
// }
// console.log(bondTitles);

console.log("6666666666666666666666666666666666666666666666666666666666666666");

// var oddBonds = [];
// for (var i=1; i<bondFilms.length; i++) {
//   if (bondFilms[i].year % 2 != 0) {
//     oddBonds.push(bondFilms[i].title);
//   }
// }
//
// console.log(oddBonds);
//

console.log("777777777777777777777777777777");


var grossArray = [];
var grossMinusSymbols = [];
var totalGrossPreSymbols = 0;
var total = ""
for (var i = 0; i < bondFilms.length; i++) {
  grossMinusSymbols.push(bondFilms[i].gross.replace(/,/gi ,"").replace("$", ""));
}
console.log(grossMinusSymbols);

for (var i = 0; i < grossMinusSymbols.length; i++) {
    totalGrossPreSymbols += parseInt(grossMinusSymbols[i]);
}
total = "$" + totalGrossPreSymbols.toLocaleString();
console.log(total);



console.log("Hungry Hungry Hungry Hungry Hungry Hungry Hungry Hungry Hungry");
// I am thinking that we need to go over this some more
var worstBondObj = {};
console.log(worstBondObj);
var pushBond = []

for (var i = 0; i < bondFilms.length; i++) {
    worstBondObj[bondFilms[i].actor] = 1;
}


for (var key in worstBondObj) {

  worstBondObj[bondFilms[i].actor]+=1;
  console.log(key);
}

// var type = worstBond[bondFilms[i].actor]
// console.log();
console.log(worstBondObj);
