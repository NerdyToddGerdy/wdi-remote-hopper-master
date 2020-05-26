var printParameter = function(value) {
  console.log(value);
}

printParameter('ten')

var minusOne = function(num) {
  if (typeof num == 'number') {
      console.log(num-1);
    } else {
      console.log("Not a number!");
    }
  };

  minusOne(7);
  minusOne('seven');

minusOne(10);

var printElement = function(arr) {
  console.log(arr[arr.length - 1]);
}

printElement([1,2,3])


var multiplyNums = function(num1,num2) {
  console.log(num1 * num2);
}

multiplyNums(6, 4);

var calculateArea = function(width,length) {
  console.log(width * length);
}

calculateArea(1,2);
calculateArea(2,3);
calculateArea(3,4);

var answer = function(first,second,third) {
  console.log("'"+(first + second + third) + "'");

}

answer(20,90,11)
