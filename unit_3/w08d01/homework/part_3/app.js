var app = angular.module('MyApp', []);

app.controller('SongController', [function(){
   this.songs = [
      {
         author: "De La Soul",
         title: "Ring Ring Ring",
         lyrics: [
            "Hey how ya doin'",
            "Sorry ya can't get through",
            "Why don't you leave your name",
            "And your number",
            "And I'll get back to you"
         ],
         year: 1991,
         hidden: false
      }, {
         author: "Ini Kamoze",
         title: "Here Comes the Hotstepper",
         lyrics: [
            "Here comes the hot stepper",
            "I'm the lyrical gangster",
            "Pick up the crew in-a de area",
            "Still love you like that"
         ],
         year: 1995,
         hidden: false
      }, {
         author: "Snow",
         title: "Informer",
         lyrics: [
            "Informer",
            "You no say daddy me Snow me-a gon' blame",
            "I lick he boom boom down",
            "'tective man they say, say daddy me Snow me stab someone down the lane",
            "I lick he boom boom down."
         ],
         year: 1993,
         hidden: false
      }
   ];
   this.hideSong = function(thingy){
      console.log('hide song');
      if (this.songs[thingy].hidden === true) {
         this.songs[thingy].hidden = false;
      } else {
         this.songs[thingy].hidden = true;
      }
   };
   this.handleSubmit = function(){
      this.songs.push();
   };
}]);
