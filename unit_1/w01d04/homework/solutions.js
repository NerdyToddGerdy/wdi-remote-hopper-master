// Control Flow

// 1. Loops repeat lines of code, conditionals skip lines of code within a block, functions control the flow

//2. arguments are inputs and parameters are how the arguments are represented in the function

//3. return changes the output of the statement and the log just staes what is in it.

//Palindrome
var checkPalindrome = function(str) {
  string1 = str.toLowerCase();
  return string1 == (string1.split('').reverse().join(''))
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

console.log("wubwubwubwubwubwubwubwubwubwub");

//Digit Sum
var sumDigits = function (num) {
  var arr = num.toString().split("") //split the numbers
  console.log(arr);

  sum = parseInt(arr[0]) + parseInt(arr[1]);
  return sum
}

console.log(sumDigits(42));


//Prime Numbers

var checkPrime = function (num) {
  for (var i = 0; i <= Math.sqrt(num); i++) {
    if (i !== 1 && i !== num) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}


console.log(checkPrime(1))


var printPrime = function(num) {
  for (var i = 1; i <= num; i++) {
    if(checkPrime(i)) {
      console.log(i);
    }
  }
  // checkPrime(num);
}

printPrime(97);

console.log(":-):-):-):-):-):-):-):-):-):-):-):-):-):-):-):-):-):-)");
//Insert Dash

var string = " ";
var insertDash = function(number) {
  var arr  = number.toString().split('');
  for (i = 0; i < arr.length; i++) {
    if ((parseInt(arr[i]) % 2 !== 0) && (parseInt(arr[i+1]) % 2 !== 0)) {
      if (i < arr.length - 1) {
        string += arr[i] + "-";
      } else {
        string += arr[i];
      }
    } else {
      string += arr[i];
    }
  }
  console.log(string);
}


insertDash(454793);

console.log("===================================");

//Pythagoras

var calculateSide = function (sideA, sideB) {
  return Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2));
}

console.log(calculateSide(8,6));

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.");
//Sum Array
var answer = 0;
var sumArray = function(arr) {
  for (i=0; i<arr.length; i++){
    answer += arr[i];
  }
  return answer
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
