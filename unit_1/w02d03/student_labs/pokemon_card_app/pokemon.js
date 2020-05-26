console.log("it works");


// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// know what cards have been played
// know how many cards are left to be played overall
// track points for both the player and the computer Note: Points are determine by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// track rounds
// track number of rounds won for both player and computer
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer


// see their stats: their points and how many rounds they've won.
var player = {
  name: "Todd",
  points: 0,
  roundsWon: 0,
  cardsThisRound:[],//splice to remove them from the deck
  playCardFromHand:function(){ //pulls cards  from cardsThisRound Runs 3 times
  },
  cardPlayed: {}, //pulled from playCardFromHand
  discardPile: [],
  isWiiner: false
}

var computer = {
  name: "Hal",
  points: 0,
  roundsWin: 0,
  cardsThisRound:[],//splice to remove them from the deck
  playCardFromHand:function(){ //pulls cards  from cardsThisRound Runs 3 times
  },
  cardPlayed: {}, //pulled from playCardFromHand
  discardPile: [],
  isWiiner: false
}

console.log(player);
console.log(computer);


// see what cards they have been dealt by the game that round.
var game = {
  start: function(){},// How does the game start and when does it end?
  library:pokemon,
  discardPile: [],// splice a random card from library and push it here
   remainingCards: pokemon.length,//shows how many cards are left
  score:{
    points:{player: player.points, computer: computer.points},
    roundsWon:{player: player.roundsWon, computer: player.roundsWon}
  },
  roundNumber: 0,
  dealTheRound: function(){//Deals the cards to Player and computer

  },
  determineRoundWinner: function(){


    game.start();
  },
  playWinner: function(){

  }
}

var pokemon = [
  {name: "Bulbasaur", damage:60},
  {name: "Caterpie", damage:40},
  {name: "Charmander", damage:60},
  {name: "Clefairy", damage:50},
  {name: "Jigglypuff", damage:60},
  {name: "Mankey", damage:30},
  {name: "Meowth", damage:60},
  {name: "Nidoran - female", damage:60},
  {name: "Nidoran - male", damage:50},
  {name: "Oddish", damage:40},
  {name: "Pidgey", damage:50},
  {name: "Pikachu", damage:50},
  {name: "Poliwag", damage:50},
  {name: "Psyduck", damage:60},
  {name: "Rattata", damage:30},
  {name: "Squirtle", damage:60},
  {name: "Vulpix", damage:50},
  {name: "Weedle", damage:40}
]
console.log(game.library);
// console.log(game);



////////// DEAL CARDS ///////////
