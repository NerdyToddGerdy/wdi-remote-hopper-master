var app = angular.module('MyApp', []);

console.log("app.js is connected to Angular homework");

app.controller("MyController", [function(){
   this.hello = 'Boy Howdy!';
}]);

app.controller("CarsController", [function(){
   this.hello = 'Car you ready to rumble?';
   this.types = ["Honda", "Ford", "Chevy", "Tesla"];
   this.colors = ["gold", "blue", "silver", "white", "black", "grey"];
}]);

app.controller("DriversController", [function(){
   this.hello = 'Driver Controller is made';
   this.name = 'Todd Gerdy';
   this.driverImg = 'https://i.imgur.com/bO8Fxtc.png';
   this.isShy = true;
}]);
