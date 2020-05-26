console.log('app.js');
const app = angular.module('App', []);

app.controller('MainController', ['$http', function($http) {

  this.message = "hello";
  this.APIResult = [];


  $http.get('https://api.github.com/users/singular000/repos')
    .then(result => this.APIResult = result.data)

}]);
