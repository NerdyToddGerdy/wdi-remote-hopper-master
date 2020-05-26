console.log('ES6 Practise: object literals');

const name = "Sonny Jim";
const age = 10;

const obj = { 
  name,
  age,
  printName() {
    console.log(this.name);
  },
  printAge() {
    console.log(this.age)
  }
}

console.log(obj);

obj.printName();
obj.printAge();
