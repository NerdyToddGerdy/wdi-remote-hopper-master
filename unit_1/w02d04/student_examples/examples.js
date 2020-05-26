// var Person = function(initialName){
  //private methods/variables
  // var age = 36;

  //public methods/variables
  // var name = initialName;
  // this.name = initialName;
  // this.eyeColor = "";
  // this.sayHello = function(){
  //   console.log("Hello, I'm " + name);
  // };
  // this.sayHello = function(){
  //   console.log("Hello, I'm " + this.name);
  // };
  // this.getAge = function(){
  //   return age
  // };
  // this.age = function(){
  //   age++;
//   // };
// };
// Person.eyeColors = ['blue','green','brown'];
//
// var me = new Person("Matt");
// var bob = new Person("Robert");
//
// me.eyeColor = Person.eyeColors[1];
//
// console.log(me);
// console.log(bob);
// // me.sayHello();
// bob.sayHello();
// console.log(bob.getAge());
// bob.age();
// console.log(bob.getAge());


//
//
//
// var Person = function(initialName){
//   var name = initialName;
//   this.sayHello = function(){
//     console.log("Up and Atom");
//   }
// };
//
// var SuperHero = function(initialName, power){
//   Person.call(this, initialName);
//   this.power = power;
// };
//
// var superman = new SuperHero("Superman", "fly");
//
// superman.sayHello();
// console.log(superman);




// var Car = function(serialNumber){
//   this.serialNumber = serialNumber;
//   this.drive = function(){
//     console.log("Vroom");
//   }
// }
//
// var factory = {
//   cars:[],
//   generateCar: function(){
//     var newCar = new Car(this.cars.length);
//     this.cars.push(newCar);
//   }
// }
//
// factory.generateCar();
// factory.generateCar();
//
// console.log(factory);


var Car = function(maker, serialNumber){
  this.maker = maker;
  this.serialNumber = serialNumber;
  this.drive = function(){
    console.log("Vroom");
  }
};

var Factory = function(company){
  this.company = company;
  this.cars = [];
  this.generateCar = function(){
    var newCar = new Car(this.cars.length);
    this.cars.push(newCar);
  }
}

var bmw = new Factory('BMW');
bmw.generateCar();

console.log(bmw);
