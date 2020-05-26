var app = angular.module('CharacterApp', []);

app.controller('MainController', ['$http', function($http){
var controller = this;
   this.addChar = function(){
      $http({
         method: 'POST',
         url: '/character',
         data: {
            name: this.name,
            race: this.race,
            hp: this.hp,
            mp: this.mp,
            xp: this.xp
         }
      }).then(function(response){
         console.log(response, 'response');
         controller.getChars();
      });
   };

   this.deleteChar = function(id){
      $http({
         method: 'DELETE',
         url: '/character/' + id
      }).then(function(response){
         controller.getChars();
      });
   };

   this.showEdit = function(id){
      console.log(id);
      this.editableCharId = id;
   };

   this.getChars = function(){
      $http({
         method:"GET",
         url:'/character'
      }).then(function(response){
         console.log(response);
         controller.characters = response.data;
      });
   };

   this.updateChar = function(char){
      console.log(char);
      var newChar = {
         name: this.newName,
         race: this.newRace,
         hp: this.newHp,
         mp: this.newMp,
         xp: this.newXp
      };
      $http({
         method: "PUT",
         url: '/character/' + char._id,
         data: char
      }).then(function(response){
         controller.editableCharId = null;
         controller.getChars();
      });
   };
   this.getChars();
}]);
