var Person = function(initialName){
  // private methods/variables
  var age = 36;

  // public methods/variables
  this.name = initialName;
  this.sayHello = function(){
    console.log("Hello, I'm " + name);
  };
  this.getAge = function(){
    return age
  };
  this.age = function(){
    age++;
  };
};

var steve = new Person("Steve")

console.log(steve);
console.log(steve.getAge());

console.log("===============================================");

var Pet = function(initialName,initialAge){
  var name = initialName;
  var age = initialAge;

  this.sayHello = function(){
    return "hi "+name+" your age is " + age;
  };
}

var rufio = new Pet("Rufio");
var dweezil = new Pet("Dweezil",4);

console.log(rufio);
console.log(dweezil.sayHello());

console.log("45454545454545454545454545454545454545454545454");

var Boat = function(model, length, cost){
  var price = cost;

  this.modelOfBoat = model;
  this.lengthOfBoat = length;
  this.getCost = function(){
    return cost;
  }

}

var minnow = new Boat("touring", "15 feet", "5000");

console.log(minnow);
console.log(minnow.getCost());











//
