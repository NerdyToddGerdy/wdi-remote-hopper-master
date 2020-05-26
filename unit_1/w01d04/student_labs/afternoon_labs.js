var printCool = function(name) {
  console.log(name + "is cool");
}

printCool("Captain Reynolds");

var calculateCube = function(num) {
  return Math.pow(num,3)
}

console.log(calculateCube(5));

var isAVowel = function(letter) {
  if (letter === ("A" || "a" || "E" || "e" || "I" || "i" || "O" || "o" || "U" || "u")) {
    return true
  } else
    return false
}

console.log(isAVowel("A"));
console.log(isAVowel("b"));


// 4
var getTwoLengths = function(stringOne,stringTwo) {
  return [stringOne.length,stringTwo.length]
}

console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5
var newArray = []
var getMultipleLengths = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    newArray.push(arr[i].length)
  }
  return newArray
}

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//6
var maxOfThree = function(num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

console.log(maxOfThree(6,9,1));

console.log("+++++++++++++++++++++++++++++");

//7
var newErArray = []
var printLongestWord = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    newErArray.push(arr[i].length)
  }
  return newErArray
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
console.log(Math.max(newErArray.join('').toString(",")));
console.log(newErArray);
