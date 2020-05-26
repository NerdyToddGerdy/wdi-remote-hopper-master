console.log('ES6 practice: classes');

class User {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  printName() {
    console.log(this.name)
  }

  printAge() {
    console.log(this.age)
  }
}


class Admin extends User {

  constructor(name, age) {
    super(name, age);
    this.admin = true;
    this.permissionsLevel = 3;
  }
  
  printCredentials() {
    console.log(this.name + ' has permissions: ' + this.permissionsLevel);
  }
}

const adminUser = new Admin('Stannis', 55);

adminUser.printCredentials();



// const User = function() {
    // this.printName(name) {
    // }

// }

// const user = new User;

