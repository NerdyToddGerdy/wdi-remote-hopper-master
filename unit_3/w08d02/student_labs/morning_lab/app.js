var app = angular.module("movieSearch", []);

app.controller('movieSearchController', ['$http', function($http){
   var controller = this;
   this.foundTitles = [];
   this.inputData = "";
   this.searchForMovie = function(){
      console.log(this.inputData);
   };
   this.find = function(){
      $http({
         method: "GET",
         url: 'http://www.omdbapi.com/?s=' + controller.inputData
      }).then(
         function(response){
            console.log(response);
            controller.foundTitles = response.data.Search;
         }
      );
   };
}]);
