var validCard = function(creditCard){
   var number = creditCard;
   var stringed = number.toString();
   var splitString = [];
   var secondString = [];
   for (var i = 0; i < stringed.length; i++) {
      splitString.push(stringed.charAt(i));
   }
   var totals = 0;
   for (var j= 1; j < splitString.length; j += 2) {
      splitString[j] = splitString[j] * 2;
      console.log(splitString[j]);
      if (splitString[j] > 9) {
         console.log('runnig third loop');
         for (var k = 0; k < splitString[j].length; k++) {
            secondString.push(splitString[j].charAt(k));
            secondString[k] = secondString[k] + secondString[k + 1];
         }
         console.log(secondString[0]);
      }
      totals = totals + splitString[j];
   }
   console.log(totals);
   if (totals === 70){
      return true;
   } else {
      return false;
   }
   // console.log(splitString);
};

console.log(validCard(1234567890123456));
console.log(validCard(4408041234567893));


//// Joe's try = https://i.imgur.com/wWDLsQx.png

//// Hanna's try = https://i.imgur.com/IwiDFKI.png
