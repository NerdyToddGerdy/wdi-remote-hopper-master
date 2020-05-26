var money = 0; // this is the start of the wallet.
var profitOptions = [1,5,50,100,250];//these are how much each tool will make
var day = 0; //I added a day counter so you could see how quickly you can complete it.
var currentTools = ["teeth"]//I have it designed to start you with some teeth
var tools = ["teeth","old timey push lawnmower","Fancy battery-powered lawnmower", "a team of starving students"];// these are the tools available in the game
var toolPrices = [0,5,25,250,500]; //this includes how much each tool costs
// var toolLength = currentTools.length;

var mainMenu = function() { // this is the main menu
  // addLines();//   This is a trial run
  if (money >= 1000 && currentTools.includes("a team of starving students")) {
    alert("You have mowed all the grass")
  } else {
    var answer = prompt("Day " + day + " You have $" + money + " What would you like to use to cut the lawn?", currentTools + ", reset, or quit");
    if(currentTools.includes(answer)) {
      makeMoney();
    } else if (answer == "quit") {
      alert("go ahead and give up on your dreams then.")
    } else if (answer == "reset") {
      resetGame();
    } else {
      mainMenu();
    }
  }
}

var resetGame = function() { //resets the game
  var money = 0;
  var day = 0;
  var currentTools = ["teeth"];
  mainMenu();
}

var makeMoney = function() { //runs the money making simulation to allow proper amount based on profitOptions array
  money += profitOptions[currentTools.length - 1];
  day += 1;
  seeOffers();
}

var offerTool = function() { //offer the next available item. Will not offer anything after "a team of starving students"
  if (currentTools.includes("a team of starving students")){
    mainMenu();
  } else {
    var purchaseOffer = prompt("Hey kid, come over here.  Using your " + currentTools[currentTools.length-1] + " is oldschool. I just happen to have the newest thing. " + tools[currentTools.length] + " It'll cost you $" + toolPrices[currentTools.length] + ". What do you say?", "yes or no?")
    if (purchaseOffer.toLowerCase() == "yes") {
      store();
    } else {
      mainMenu();
    }
  }
}

var store = function() { //buy the appropriate item
  money -= toolPrices[currentTools.length];
  day += 1;
  var newTool = currentTools.push(tools[currentTools.length]);
  alert("You now have " + currentTools[currentTools.length -1]);
  mainMenu();
}

var seeOffers = function() {//brings up the sales options when you have enough money
  if (money >= toolPrices[currentTools.length]) {
    offerTool();
  } else {
    mainMenu();
  }
}

mainMenu(); // start the game
