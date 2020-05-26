var app = angular.module('MyApp', []);

app.controller('baseCtrl', ['$http', function($http){
   var controller = this;
   this.foundMovieTitle = '';
   this.find = function(){
      $http({
         method:'GET',
         url: 'http://www.omdbapi.com/?t=frozen'
      }).then(
         function(response){ //success callback
            console.log('success');
            controller.foundMovieTitle = response.data.Title;
         },
         function(error){ //fail callback
            console.log('fail');
            console.log(error);
         }
      );
   };
}]);
