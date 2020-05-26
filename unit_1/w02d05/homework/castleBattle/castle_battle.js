console.log("test");
// // objects
//
// // 2 main objects - Player, Computer
// Player and comp both have 10 HP(hit points), a barracks(array)

////START OF PLAYER OBJECT HERE
var player = {
  name: "",
  hitPoints: 10,
  attackers: 0,
  repairers: 0
}

//////PLAYERBARRACKS IS RUNNING SMOOTHLY
var playerBarracks = {
  peons:[],
  createPeon: function(peonName){
    var newPeon = new Peon(peonName);
    this.peons.push(newPeon);
  }
}

var Peon = function(peonName){
  this.name = peonName;
  this.job = ""
}

//////COPUTER INFO STARTS HERE

////// IGNORING FOR NOW. I WANT TO CREATE THE COMPUTER SO THAT IT RUNS THE SAME WAY THE PLAYER DOES.
var computer = {
  name: "Computer",
  hitPoints: 10,
  randomNumberGenerator: function(){
    var computerOption = Math.round(Math.random()*(2-0)+0)
    if (computerOption === 0) {
      return ""
    } else if (computerOption === 1) {
      computer.hitPoints++;
    } else if (computerOption === 2) {
      player.hitPoints--;
    };
  }
}

// RETURNING TO LATER
var computerBarracks = {
  peons:[],
  createPeon: function(peonName){
    var newPeon = new Peon(peonName);
    this.peons.push(newPeon);
  },

}

//Trying to understand DOM a little bit.
var myFunction = function(){
  var h = document.createElement("H1")
  var h2 = document.createElement("h2")              // Create a <h1> element
  var t = document.createTextNode("Hello World");     // Create a text node
  h.appendChild(t);                                   // Append the text to <h1>
  h2.appendChild(t)
  document.body.appendChild(h);
  document.body.appendChild(h2)
}

////GAME STARTS HERE.
//////PLAYERS GAME FUNCTIONS

//////THIS FUNCTION IS RUNNING CORRECTLY
var askForName = function(){
  var newPeonName = prompt("What would you like to name your new Peon?")
  playerBarracks.createPeon(newPeonName);
  console.log(playerBarracks.peons);
}

//////A FUNCTION TO FIND THE CORRECT PEON AND ATTACH THE JOB TO HIM

/// I wanted to have a list of the names available popup in the prompt but ran out of time
var askToAssign = function(peonsName){
  var whoToAssign = prompt("Who do you want to assign to a job? ");
  console.log(whoToAssign);
  console.log(playerBarracks.peons);

  var whatToAssign = prompt("What would you like " + whoToAssign + " to do?", "Attack or Repair?")
  console.log(whatToAssign);

  var filteredArray = playerBarracks.peons.filter(function(element){
    return element.name === whoToAssign;
  })
  playerBarracks.peons[playerBarracks.peons.indexOf(filteredArray[0])].job = whatToAssign;
}

var endOfPlayerTurn = function() {
  var playersPower = 0;
  var playersRepair = 0;

  playerBarracks.peons.forEach(function(element){
    if(element.job === ""){
      return
    } else if(element.job === "attack"){
      playersPower += 1;
    } else if (element.job === "repair") {
      playersRepair += 1;
    } else {
      return
    }
  })
  player.attackers = playersPower;
  player.repairers = playersRepair;
  computer.hitPoints -= player.attackers;
  player.hitPoints += player.repairers;
}

//////THIS FUNCTION IS RUNNING SMOOTHLY
var playersTurn = function(){
  var askToCreate = prompt(" Player's Hit Points :" + player.hitPoints + "  Compter's Hit Points :"  + computer.hitPoints + "                 Do you want to create a new peon, or assign to an existing peon?","create or assign?");
  if (askToCreate.toLowerCase() === "create" ) {
    askForName();
  } else if (askToCreate.toLowerCase() === "assign") {
    askToAssign();
  } else {
    playersTurn();
  }
  endOfPlayerTurn();
  alert("It is now the computers turn.");
  computersTurn();
}

//////COMPUTER'S GAME FUNCTIONS
var computersTurn = function(){
  computer.randomNumberGenerator();
  startGame();
}

var startGame = function() {
  while (computer.hitPoints > 0 && player.hitPoints > 0) {
    playersTurn();
  }
  if (computer.hitPoints <= 0) {
    alert("Congratulations! You have won the game!!")
  } else if (player.hitPoints <= 0) {
    alert("You have been defeated")
  }
}

startGame();

// Barracks is the factory and the storage of the Peons
//
// 1 constructor - peon maker
//

// Game Flow:
// Player's turn
//   create or select peon
//     if create: use factory to create peon in the Barracks with selected name
//     if select is chosen, give options of peon names then ask what the peon should be doing - attack or repair
//       make the peon do it
//   Run the peons - for loop?
//     attack - remove 1 up from enemy
//     repair - add 1 hp to self
// Computer's turn
//   Choose a number from 0 - 2
//     0 results in nothing
//     1 does repairs
//       compHP++
//     2 attacks
//       user HP--
// End of turn phase - while loop?
//   if comp has 0 points, you win
//   if you have 0 HP, you lose
//   if both have 0 hp, you tie
//   else keep run again
//
//
// Hungry for more..
//   computer runs like Player
//   make 2nd player able to be a real player
//   repairs are between 1 & 3 HP
//   attaacks are between 1 & 3 HP
//
