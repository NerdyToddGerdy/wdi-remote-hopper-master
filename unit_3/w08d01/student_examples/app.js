var app = angular.module('MyApp', []);

app.controller("MyController", [function(){
   this.hello = "Yellow!!";
   this.isActive = false;
   this.items = ['chubby hubby', 'cherry garcia', 'americone dream'];
   this.divExists = true;
   this.hideDiv = false;
   this.showDiv = false;
   this.imgSrc = "https://i.imgur.com/QuZl7cq.png";
   this.someProperty = 'foo';
   this.someAction = function(){
      console.log('someAction was called');
   };
   this.handleSubmit = function(){
      console.log('Form was submitted. The value was: ' + this.someProperty);
   };
}]);
