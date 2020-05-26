var printGreeting = function(name) {
  console.log("hello there, " + name);
}

printGreeting("Slimer!")


var reverseWord = function(name) {
  console.log(name.split(" ").reverse().join(" "));
}

reverseWord("Ishmael me Call")
reverseWord("I use Lâncome on my comb")

var calculate = function(num1, num2, operation) {
  if (operation == "add") {
    console.log(num1 + num2);
  } else if (operation == "sub") {
    console.log(num1 - num2);
  } else if (operation == "mult") {
    console.log(num1 * num2);
  } else if (operation == "div") {
    console.log(num1 / num2);
  } else if (operation == "exp") {
     console.log(Math.pow(num1, num2));
  }
}

calculate(4, 3, "sub");
calculate(4, 3, "mult");
calculate(4, 3, "add");
calculate(4, 3, "div");
calculate(4, 3, "exp");


var pandigital = function(num) {
  var sorted =  num.toString().split("").sort();
  console.log(sorted);
  for (i=0; i<sorted.length; i++) {
    if (sorted[i] != i+1) {
      return false
    }
  }
  return true
}

console.log(pandigital(12245));

var reverseWordTwo = function(name) {
  console.log(name.split("").reverse().join(""));
}

reverseWord("noitanigami")
// reverseWord("I use Lâncome on my comb")
