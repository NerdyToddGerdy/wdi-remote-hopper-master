console.log('%c test', 'color:red; font-size:30px');

var userShip = {
  //here is my ship.
  //It is able to find its opponent **currently only the last one in the enemyFleet array**.
  //It can also shoot its lasers with a 75% accuracy
  name: "USS Schwarzenegger",
  hull: 20,
  firepower: 5,
  accuracy: .7,
  opponent:function(){ return enemyFactory.enemyFleet[enemyFactory.enemyFleet.length - 1]}, //adding an enemy ship so I can change it depending on who attacks me.  Also should allow me to check accuracy as a seperate function.
  shootLasers: function(){
    console.log(userShip.name + " fired lasers");
    var thisShotsAccuracy = Math.random()
    if (thisShotsAccuracy < this.accuracy) { //Checks accuracy against thisShotsAccuracy
      console.log("A Direct Hit");
      theLastEnemyMade.hull -= userShip.firepower;

        console.log(">>>It dealt " + userShip.firepower + " damage"); //deals damage if accuracy is high enough
    } else {
      console.log("You missed"); //Does not fire
    //accuracyCheck();  //// this is a thought to remove this from both types of ships.
    }
  }
}//***My ship is ready to launch***


var theLastEnemyMadeTemplate = function(nameString){
  //This is my enemy ship constuctor
  this.name = nameString;
  this.hull = Math.round(Math.random() * (6-3)+3),
  this.firepower = Math.round(Math.random() * (4-2)+2),
  this.accuracy = Math.random() * (.8-.6)+.6,
  this.shootLasers = function(){
    console.log(this.name + " fired lasers");
    var thisShotsAccuracy = Math.random()
    if (thisShotsAccuracy < this.accuracy) { //Checks accuracy against thisShotsAccuracy
      console.log("A Direct Hit");
      userShip.hull -= theLastEnemyMade.firepower; //deals damage if accuracy is higih enough
      console.log(">>>It dealt " + this.firepower + " damage");

    } else {
      console.log("They missed"); //Does not fire
    }
    // accuracyCheck();
  }
}

var enemyFactory = {
  //my factory creates an array of enemy ships called enemyFleet
  // currently the names are Enemy # 1 through 6
  // plans to add he ship pilot names into the generate functions
  enemyFleet:[],
  generateShip: function(){
    var newShip = new theLastEnemyMadeTemplate("Enemy #" +  this.enemyFleet.length)
    this.enemyFleet.push(newShip);
  }
}

// The generate functions
enemyFactory.generateShip();
enemyFactory.generateShip();
enemyFactory.generateShip();
enemyFactory.generateShip();
enemyFactory.generateShip();
enemyFactory.generateShip();

var theLastEnemyMade = enemyFactory.enemyFleet[enemyFactory.enemyFleet.length -1];


//***ATTACK SEQUENCE***

// Basically While the 2 ships still have hull > 0, the userShip will fire first, then the enemy will shoot if it is still alive.
//if the enemy isn't alive, it will explode alot/
var attackSequence = function(){
  while(userShip.hull > 0 && theLastEnemyMade.hull > 0){//repeat until one of you is destroyed
    userShip.shootLasers();//I attack
    if (theLastEnemyMade.hull > 0){//if enemy survives the attack, it attacks back.
      theLastEnemyMade.shootLasers();
    } else {
      console.log("***BLAM!!!! BOOOM!!!!!! KAPOW!!!!***  ENEMY SHIP WAS DESTROYED");// except that you wouldn't hear this because you know, space.
      enemyFactory.enemyFleet.pop()
    }
    console.log(userShip.name + "'s hull is at " + userShip.hull);
    console.log(theLastEnemyMade.name + "'s hull is at " + theLastEnemyMade.hull);
    console.log(enemyFactory.enemyFleet.length + " Ships left");
  }
}

/////////// need to add a way to pull destroyed ships from the game.
    //if they are destroyed, go to next ship or retreat

      //if there are no ships left, you win!!

    //if you are destroyed, you lose

//When ship is destroyed, attack another ship

//How does one interact?
// prompts



attackSequence()  // The beginning of the game
