console.log('app.js');
const app = angular.module('App', []);

app.controller('MainController', ['$http', function($http) {

  this.message = "hello";
  this.APIResult = [];

}]);
