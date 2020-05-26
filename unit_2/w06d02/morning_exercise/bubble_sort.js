console.log('Hello World');

var bubbleSort = function(inputArray){
  console.log('bubble sorting');
  var swap = true;
  while (swap === true){
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > inputArray[i+1]) {
        var temp = inputArray[i];
        inputArray[i] = inputArray[i+1];
        inputArray[i+1] = temp;
        // console.log(inputArray);
        swap = true;
        console.log('position ' + i);
        i = 0;
      } else {
        console.log('position ' + i +'no changes');

      }
      console.log(inputArray);
    }
    swap = false;
  }
};

bubbleSort([10, 0, 99, 100, 8, 55, 2, 17, 16, 15, 1000, 1]);
