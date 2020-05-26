// pseudo code

//USS Schwarz
//object
// might have an object method that can attack something. This object does something. It attacks


// one alien is an object
// might have an object method that does some attacking

//loop - continue until either  the USS Schwarz hull is at 0 or an alien ships hull is at 0.


// Later ......
//aliens - array of objects?
//all different..? constructor?
var ussSchwarz = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: function() {
        console.log("USS Schwarzenegger attacks...");
        if (Math.random() < ussSchwarz.firepower){ //changed this to ussSchwarz.firepower from .7
            console.log("Target Hit!");
            aliens[thisAlien].hull -= this.firepower;
            console.log("Alien ship " + thisAlien + " remaining health is " + aliens[thisAlien].hull); // I am a bit confused about your thisAlien.  Maybe a different word or phrase to make it less confusing
        }else {
            console.log("Target Missed!");
        }
    }
}

var aliens = [];

var Alien = function(){
    this.hull = Math.floor(Math.random() *4) + 3,
    this.firepower = Math.floor(Math.random() *3 + 2),
    this.accuracy = Math.random() * (.8-.6) + .6
};

var alien1 = new Alien();
var alien2 = new Alien();
var alien3 = new Alien();
var alien4 = new Alien();
var alien5 = new Alien();
var alien6 = new Alien();

aliens.push(alien1);
aliens.push(alien2);
aliens.push(alien3);
aliens.push(alien4);
aliens.push(alien5);
aliens.push(alien6);

var alienAttack = function() {
    console.log("Alien " + thisAlien + " Attacks...");
    if (Math.random() < aliens[thisAlien].accuracy){
        console.log("Target Hit!");
        ussSchwarz.hull -= aliens[thisAlien].firepower;
        console.log("USS Schwarzenegger remaining health is " + ussSchwarz.hull);
    }else {
        console.log("Target Missed!");

    }
    if(aliens[thisAlien].hull > 0){
        ussSchwarz.attack()
    }
}

var gameOver = function(){
    console.log("Game over");
    return;
}
// for (var thisAlien = 0; thisAlien <aliens.length; thisAlien++){
//     alienAttack();
// }

while(ussSchwarz.hull > 0){
    for (var thisAlien = 0; thisAlien <aliens.length; thisAlien++){
        ussSchwarz.attack();

        if (ussSchwarz.hull <= 0){
            console.log("USS Schwarzenegger has been destroyed");
            gameOver();
        } else if(aliens[thisAlien].hull <=0){
            console.log("The alien ship has been destroyed");
            // var response = prompt("Do you want to continue beating up on aliens or retreat and fight another day?", 'fight / retreat');
            // if(response === "fight"){
            //     ussSchwarz.attack();
            // }else if (response === "retreat"){
            //     gameOver();
            // }
            ;
        } else if (aliens[thisAlien].hull > 0){
            // alienAttack()
        }
        alienAttack();  // by having the alienAttack() here, you are having it run in every instance of the loop. but if you move it outside of the loop the thisAlien portion no longer works.
    }
}
