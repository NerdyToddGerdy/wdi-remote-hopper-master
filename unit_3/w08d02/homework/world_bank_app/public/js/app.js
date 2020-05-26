var app = angular.module('WorldBank', []);

app.controller('wbinfoController', ['$http', function($http){
  this.banks = [];
  var controller = this;
  this.formdata = {};
  this.processForm = function(){
   $http({
      method: 'POST',
      url: '/wbinfo',
      data: this.formdata
   }).then(function(response){
      console.log(response.data);
      controller.getRegions();
   }, function(error){
      console.log(error);
   });
};
  this.showingRecords = function(theseRecords){
   console.log(theseRecords);
   controller.showing = true;
   $http({
     method:'GET',
     url:'http://localhost:3000/wbinfo/byName/' + theseRecords
   }).then(
     function(response){//success
       console.log('Successful response:', response.data);
       controller.info = response.data;
     },
     function(response){//fail
             console.log('Failed response:', response);
    });
};


   $http({
      method:'GET',
      url:'http://localhost:3000/wbinfo/count'
   }).then(
      function(response){//success
      // console.log('Successful response:', response);
      controller.count = response.data;
   },
      function(response){//fail
         // console.log('Failed response:', response);
   });



   this.getRegions = function(){
      $http({
         method:'GET',
         url:'/wbinfo/uniqueRegions'
      }).then(
         function(response){//success
            console.log('Successful response:', response.data);
            controller.names = response.data;
         },
         function(response){//fail
            console.log('Failed response:', response);
         });
   };
   this.getRegions();
}]);//End of Controller
