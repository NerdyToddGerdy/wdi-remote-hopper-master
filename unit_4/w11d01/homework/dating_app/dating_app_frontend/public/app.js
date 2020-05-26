console.log('hi');

var app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){
   this.whatevs = "yeah...whatevs";
   this.match = [];
   this.firstThree = [];
   this.secondThree = [];
   this.test = "";
   $http({
      method: 'Get',
      url: 'http://localhost:3000/users'
   }).then(function(result){
      this.match = result.data;
      this.firstThree = this.match.slice(0,3);
      this.secondThree = this.match.slice(3,6);
      // console.log(this.firstThree);
   }.bind(this));

   this.processForm = function(){
      console.log('formdata here: ', this.formdata);
      $http({
         method: 'POST',
         url: 'http://localhost:3000/users',
         data: this.formdata
      }).then(function(result){
         console.log('Data from server: ', result);
         this.formdata = {};
      }.bind(this));
   };
}]);


// INVESTIGATION
// I wish I could write a long paragraph for you but I really couldn't grasp this at all
