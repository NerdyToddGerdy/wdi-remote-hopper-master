// console.log("tamagotchi.js is connected");

// var tamagotchi1 = {
//   name: "Simon",
//   creatureType: "Dragon",
//   foodInTummy: 10,
//   restedness: 10,
//   health: 10,
//   cry: function(){
//     this.foodInTummy--;
//     console.log("Waaaaaaa");
//     console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
//   },
//   puke: function(){
//     this.health--;
//     console.log("Bluuggguuhhhhh");
//     console.log(this.name + "'s Health:" + this.health);
//   },
//   yawn: function() {
//     this.restedness--;
//     console.log("YAWWWWWWWNnnn.");
//     console.log(this.name + "'s Restedness:" + this.restedness);
//   },
//   start: function(){
//     var self = this;
//     var hungerTimer = setInterval(function(){
//       self.cry();
//     }, 6000)
//     var yawnTimer = setInterval(function() {
//       self.yawn();
//     }, 10000);
//     var sickTimer = setInterval(function(){
//       self.puke();
//     }, 25000)
//   }
// };
//
// tamagotchi1.start();
//
// var player = {
//   name: "Neo",
//   feedTamogatchi: function(food){
//     tamagotchi1.foodInTummy++;
//     console.log("Yum! " + tamagotchi1.name + " has been fed " + food + " and now has  " + tamagotchi1.foodInTummy);
//   },
//   medicateTamogatchi: function(meds){
//     tamagotchi1.health++;
//     console.log("Poke!! " + tamagotchi1.name + " has been healed with " + meds + " and now has  " + tamagotchi1.health);
//   },
//   knockOutTamogatchi: function(weapon){
//     tamagotchi1.restedness++;
//     console.log("Yum! " + tamagotchi1.name + " has been knocked out with a " + weapon + " and now has  " + tamagotchi1.restedness);
//   }
// };
//
//
//
// var stopTime = function(){
//   clearInterval(hungerTimer);
//   clearInterval(yawnTimer);
//   clearInterval(sickTimer);
// }



// player.feedTamogatchi('shitty gas station cheese burger');
// player.medicateTamogatchi('crack cocaine');
// player.knockOutTamogatchi('pistol whip to the left temple');
// var tamagotchi2 = {
//   name: "Helga",
//   creatureType: "Dragon",
//   foodInTummy: 10,
//   restedness: 10,
//   health: 10,
//   cry: function(){
//     this.foodInTummy--;
//     console.log("Waaaaaaa");
//     console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
//   },
//   puke: function(){
//     this.health--;
//     console.log("Bluuggguuhhhhh");
//     console.log(this.name + "'s Health:" + this.health);
//   },
//   yawn: function() {
//     this.restedness--;
//     console.log("YAWWWWWWWNnnn.");
//     console.log(this.name + "'s Restedness:" + this.restedness);
//   }
// };
// tamagotchi1.cry();
// tamagotchi1.puke();
// tamagotchi1.yawn();




// //////////////////////
// //higher order functions
//
// //for loop
// var numbers = [1,2,3,4];
// var newNumbers = [];
// for (var i = 0; i < numbers.length; i++) {
//   newNumbers[i] = numbers[i] * 2;
// }
// console.log(newNumbers);
//
// //MAP
// var numbers = [1,2,3,4];
// var newNumbers = numbers.map(function(num){
//   return num * 2;
// }).map(function(num){
//   return num + 1;
// })
//
// console.log(newNumbers);
//
//
// //FILTER
//
// var numbers = [1,2,3,4];
//
// var oddNumbers = numbers.filter(function(num){
//   return (num % 2 !== 0);
// }).map(function(num){
//   return num * 2;
// })
// console.log(oddNumbers);
//

//REDUCE

var numbers = [1,2,3,4];
// var sum = numbers.reduce(function(a, b){
//   console.log("a is: " + a);
//   console.log("b is: " + b);
//   console.log("a + b = " + (a + b));
//   console.log("====================");
//   return a + b;
// }, 0)
// console.log(sum);

//
//FOR EACH

oddNumbers = numbers.filter(function(num){
  return(num %2 !== 0);
})
numbers.forEach(function(num){
  console.log(num);
})










///








//
