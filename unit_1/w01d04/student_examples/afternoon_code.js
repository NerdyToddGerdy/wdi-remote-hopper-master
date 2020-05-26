// var checkForLetterA = function (letter) {
//   if (letter == "A") {
//     return true;
//   }
//   return false;
// }
//
//
// // check an array of letters
//
// var checkArrayOfLetters = function(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     // console.log(checkForLetterA(arr[i]));
//     if (checkForLetterA(arr[i])) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
// }
//
// checkArrayOfLetters(["A", "B", "C", "A"]);





// return true if a number is divible by 2 and a perfect square


var divisibleByTwo = function(num) {
  if(num % 2 == 0) {
    // console.log(num + " is divisible by 2");
    return true;
  }else {
    // console.log(num + " is not divisible by 2");
    return false;
  }
}

var isPerfectSquare = function(num) {
  if(num == Math.sqrt(num) * Math.sqrt(num)) {
    // console.log(num + " is a perfect square");
    return true;
  } else {
    // console.log(num + " is not a perfect square");
    return false;
  }
}

//takes divisibleByTwo and isPerfectSquare and runs them both
var runsBothFuncs = function() {
  for (i=1; i<100; i++) {
    if (divisbleByTwo(i) == true && isPerfectSquare(i) == true) {
      console.log(i + " is perfect and even" );
    } else if (divisibleByTwo(i) == true) {
      console.log(i + " is even");
    } else if (isPerfectSquare(i) == true) {
      console.log(i + " is perfect square");
    } else {
      console.log(i);
    }
  }
}

runsBothFuncs();
