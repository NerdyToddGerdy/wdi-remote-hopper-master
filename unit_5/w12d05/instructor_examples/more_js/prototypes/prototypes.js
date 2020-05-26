console.log('prototypes practice');

const obj = { name: 'this obj' }
// see the object's protoype in Chrome or Firefox:
console.log(obj.__proto__);

const fn = function() {};
// see the function's prototype:
console.log(fn.prototype);

// constructor should always declare methods on the prototype:
const Human = function(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.printDetails = function() {
  console.log(this.name + ' ' + this.age);
}

const human1 = new Human('Gregory', 10);

// the methods are created once (on the prototype), not on each individual object
console.log(human1);

// javascript will look first to see if the method exists on the object,
// if not, it will look at the prototype. 
// this works:
human1.printDetails();













