//Clicker
console.log("111111111111111111111111111111111111111111111111111111111");

var clicker = {
  clickCount: 0,
  click:function() {
    this.clickCount++
    console.log(this.clickCount);
  },
}
clicker.click()

console.log("222222222222222222222222222222222222222222222222222222222");

var myInformation = {
  name: 'Todd Gerdy',
  age: 30,
  fact: "I am for the first time in my life actually enjoying being in school",
  statement: function(){
    return "my name is " + this.name + ". In 10 years I will be " + (this.age + 10) + ". " + this.fact
  },
  ageCounter: function(){
    var birthday = this.age++
    return this.age;
  },
  nameChanger: function(){
    this.name = "Rumpelstiltskin";
    return this.name;
  }
}

// myInformation.name = 'Rumpelstiltskin'

console.log(myInformation.statement());
console.log(myInformation.ageCounter());
console.log(myInformation.nameChanger());
console.log("33333333333333333333333333333333333333333333333333333333");

var greeter = {
  hello: function(name){
    return 'oh hello there,' + name;
  },
  goodbye: function(name){
    return 'Hasta La Vista,' + name;
  },
  whoAreYou: function(name){
    return 'Oh right! ' + name + ' how could i forget...!';
  }
}

console.log(greeter.hello("me"));
console.log(greeter.goodbye("me"));
console.log(greeter.whoAreYou("me"));


console.log("44444444444444444444444444444444444444444444444444444444");

var stringCollector = {
  collection:[],
  collect: function(string1){
    var reverse = string1.split("").reverse().join("");
    stringCollector.collection.push(reverse)
    return reverse
    // return splitString
  },
  admireCollection: function(){
    for (var i = 0; i < this.collection.length; i++) {
      console.log(this.collection[i]);
    }
  }
}
console.log(stringCollector.collect("noitanigami")); //added 2 strings
console.log(stringCollector.collect("test"));
stringCollector.admireCollection(); //prints out the 2 strings

console.log("55555555555555555555555555555555555555555555555555555555");

var atm = {
  totalCash: 200,
  dispenseTwenties: function(twenties){
    if ((twenties * 20) <= this.totalCash){
      this.totalCash -= (twenties * 20)
      console.log("You are withdrawing $" + (twenties * 20) + " and have a remainder of $" + this.totalCash);
    } else {
      return console.log(null);
    }
  }
}

atm.dispenseTwenties(6)
atm.dispenseTwenties(11)

console.log("66666666666666666666666666666666666666666666666666666666");

var Leonardo = {
  name: "Leonardo",
  color: "Blue",
  weapon: "Katana",
  pizzaEaten: false,
  eatPizza: function(){
    if (this.pizzaEaten === true){
      console.log("Leonardo has already eaten pizza");
      pizzaEaten = false;
    } else {
      console.log("Leonardo is eatin pizza");
      pizzaEaten = true;
    }
  }
}

Leonardo.eatPizza();

console.log("7777777777777777777777777777777777777777777777777777777");

var calculator = {
  output:0,
  multiplyTwoNumbers: function(num1,num2){
    this.output = num1 * num2;
    return console.log(this.output);
  },
  divideTwoNumbers: function(num1,num2){
    this.output = num1 / num2;
    return console.log(this.output);
  },
  addTwoNumbers: function(num1,num2){
    this.output = num1 + num2;
    return console.log(this.output);
  },
  subtractTwoNumbers: function(num1,num2){
    this.output = num1 - num2;
    return console.log(this.output);
  }
}

calculator.multiplyTwoNumbers(2,2);
calculator.divideTwoNumbers(2,2);
calculator.addTwoNumbers(2,2);
calculator.subtractTwoNumbers(2,2);

console.log("8888888888888888888888888888888888888888888888888888888");

words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
words.forEach(function(element){
  console.log(element.toUpperCase());
});

console.log("9999999999999999999999999999999999999999999999999999999");

more_words = ["Joe", "Overeats", "Eggs"];
console.log(more_words.map(function(num){
  return num.charAt()
}));

console.log("1010101010101010101010101010101010101010101010101010101");

var arr = [8, 8, 8, 8, 8, 8, 8, 8].reduce(
(num1, num2) => num1 * num2,
1
);
console.log(arr);

console.log("11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11");

var sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];
var totalCount = 0
sheepShearers.forEach(function(element){
  var pushToArr = []
  pushToArr.push(element.sheepCount);
  pushToArr[element] = pushToArr[element] + element;
  console.log(pushToArr);
})













//
