//Easy Going

for(i=0; i<=20; i++) {
  console.log(i);
}

//Get even
for (i=0; i<=200; i+=2) {
  console.log(i);
}

//Triangles
var hashtag = "#"
var argument = 7
var rightTriAnswer = "";
for (var i = 1; i <= argument; i++) {
  console.log(rightTriAnswer += hashtag);
}

argument = 6
for (var i = argument; i>=1; i--) {
    console.log("#".repeat(i));
}

// Fizz Buzz
for(i=0; i<=100; i++){
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Getting to know you
var thom = ["Thom", 1000, "Christchurch"]
var karolin = ["Karolin", 16, "New York"]
var kristyn = ["Kristyn", 5, "Pittsburgh"]
var matt = ["Matt H", 186, "Philadelphia"]

thom.shift();
thom.unshift("Gameboy")
console.log(thom[0]);

karolin[1] = 17;
console.log(karolin[1]);

matt[2] = "Gotham City";
console.log(matt[2]);

kristyn.pop();
console.log(kristyn);
kristyn.push("Brooklyn")
console.log(kristyn);


// Yell at the Ninja Turtles

var halfShell = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (var i = 0; i < halfShell.length; i++) {
  console.log(halfShell[i].toUpperCase());
}

// Excited Kitten
var catQuestions = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (var i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    // console.log(catQuestions);
    console.log(catQuestions[Math.floor(Math.random() * (catQuestions.length))]);
  }

  console.log("Love, me, pet me! HSSSSSS!");
}

// Find the Median

var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// nums.sort();
// console.log(nums[Math.floor(nums.length / 2)]);

var num2 = 0
for (var i = 0; i < nums.length; i++) {
  num2 += nums[i];
}

console.log(Math.floor(num2/nums.length));

// Multiples of 3 and 5

var euler = 0;
for (i=0; i<1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    euler += i;
  }
}
console.log(euler);


//Return of the Closets

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
]

kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
console.log(kristynsCloset);
console.log(thomsCloset[2]);




// Dress Up Up
var outfit = [];//to randomly put her clothes in.  It sometimes repeats

for (var i = 0; i < 6; i++) { //randomly adds clothes 6 times
  var kristynItem = kristynsCloset[Math.floor(Math.random() * (kristynsCloset.length-1))];
  outfit.push(kristynItem);
}

for (var i = 0; i < 3; i++) { //grabs 2 items out of the array
  console.log("kristyn is wearing "  + outfit[i] + " and " + outfit[i+3]);
}

var thomsOutfit = []; //Same as kristyn's but for Thom
for (var i = 0; i <(thomsCloset.length * 2); i++) {
  var thomsItem = thomsCloset[Math.floor(Math.random() * (thomsCloset.length-1))][Math.floor(Math.random() * (thomsCloset.length-1))];
  thomsOutfit.push(thomsItem);
}

for (var i = 0; i < 3; i++) {
  console.log("Thom is wearing "  + thomsOutfit[i] + " and " + thomsOutfit[i+3]);
}



//Dirty Laundry
for (var i = 0; i < kristynsCloset.length; i++) {
  console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

// Inventory
console.log(thomsCloset);
