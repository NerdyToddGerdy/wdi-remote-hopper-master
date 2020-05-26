var app = angular.module('MyApp', []);

app.controller("MyController", [function(){
   this.title = "Acute and Obtuse";
   this.items = [];
   this.handleSubmit = function(){
      this.items.push(this.someProperty);
      this.someProperty = "";
   };
   this.remove = function(x){
      this.items.splice(x, 1);
   };
}]);
