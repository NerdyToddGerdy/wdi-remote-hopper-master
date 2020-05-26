console.log("11111111111111111111111111111111111111111111111111111111");

// Create a constructor function for a Pet
// public attributes
// owner - string
// name - string
// constructor function takes the pets name as a parameter and sets the public attribute

var Pet = function(nameString){
  var price = 20;
  this.owner = "Todd";
  this.name = nameString;
  this.getPrice = function(){
    return price;
  }
}
var rufioTheDog = new Pet ("Rufio")
console.log(rufioTheDog.name);

console.log("22222222222222222222222222222222222222222222222222222222");
// Create a constructor function for a Dog
//  this should inherit from Pet
//  private attributes
//    price - 20
//  public methods
//    bark() - log "bark"
//    chaseTail() - log "oh boy oh boy oh boy"
//    getPrice() - return price

var Dog = function(nameString){
  var price = 20;
  Pet.call(this, nameString);
  this.bark = function(){
    console.log("bark");
  };
  this.chaseTail = function(){
    console.log("oh boy oh boy oh boy");
  };
  this.getPrice = function(){
    return price;
  };
}

var dweezil = new Dog ("Dweezil");
console.log(dweezil.getPrice());

console.log("33333333333333333333333333333333333333333333333333333333");
// Create a constructor function for a Cat
//   this should inherit from Pet
//   private attributes
//     price - 10
//   public methods
//     purr() - log "purrrrr"
//     clean() - log "cleaning"
//     getPrice() - return

var Cat = function(nameString){
  var price = 10;

  Pet.call(this, nameString);
  this.purr = function(){
    console.log("purrrrr");
  };
  this.clean = function(){
    console.log("cleaning");
  };
  this.getPrice = function(){
    return price;
  };
};

var buster = new Cat("buster")
console.log(buster.getPrice());

console.log("44444444444444444444444444444444444444444444444444444444");
var Pet = function(name, price, personName){
  var petName = name;
  var price = price;
  var owner= personName;
  this.getPrice= function(){
    return price;
  };
  this.getOwner = function(){
    return personName;
  };
  this.getpetName = function() {
    return petName;
  };
}

var Person = function(nameString){
  //Private attributes
  var name = nameString;
  var age = 0;
  var weight = 0;
  var mood = 0;
  var pets = [];
  var bankAccount = 0;

  //Public methods
  this.getName = function() {
    return name;
  };
  this.getAge = function() {
    return age;
  };
  this.getWeight = function() {
    return weight;
  };
  this.greet = function(){
    console.log("Hello! I am " + name);
  };
  this.eat = function(){
    console.log(">>>>>>>ate!!<<<<<<<");
    weight++;
    console.log("weight " + weight);
    mood++;
    console.log("mood " + mood);
  };
  this.exercise = function(){
    console.log(">>>>>>>Lift Bruh!<<<<<<<<<");
    weight--;
    console.log("weight " + weight);
  };
  this.addAge = function(){
    console.log(">>>>>Got old<<<<<");
    age++;
    console.log("age " + age);
    weight++;
    console.log("weight " + age);
    mood--;
    console.log("mood " + age);
    bankAccount+= 10;//Woo Birthday Money;
    console.log("bank Account " + bankAccount);
  }
  this.getPetArray = function(){
    return pets;
  }
  this.buyPet = function(Pet){///I just am not sure what needs to happen here
    pets.push(name);
    mood += 10;
    console.log(mood + "112313213213212312312312312312311684321684.21468");
    // Dog.call(this, newPetName);
    console.log("******************" + bankAccount);
    return bankAccount -= Pet.getPrice();
  };
};

var todd = new Person("Todd");
// todd.buyPet("Rufio");
// console.log(todd.getPetArray());

console.log("5555555555555555555555555555555555555555555555555555555");

var timmy = new Person("Timmy");



var cat = new Pet("Scratchy", 10, "Timmy");
var dog = new Pet("Lassie", 20, "Timmy");

// var newAgeTimmy = timmy.addAge();
// var newWeightTimmy
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.buyPet(dog);
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.buyPet(cat);
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.addAge();
timmy.eat();
timmy.eat();
timmy.exercise();
timmy.exercise();







//
