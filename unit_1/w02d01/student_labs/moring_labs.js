var me = {}

me.name = "Todd";
me.age = "30";
me.email = "toadimous@gmail.com";

console.log(me.name);

me.age = 1000;
console.log(me.age);

me["place of residence"] = "Charlottesville, Virginia";
console.log(me["place of residence"]);

var obj = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(obj.name);
obj.type = "creature";
obj.age = 6;
console.log(obj);



// ogres
var adventurer = {
  name: "John Smith",
  hp: 100,
}

var ogre = {
  name: "Blug",
  hp: 50
}

var battle = function() {
  if(ogre.hp > 0 && adventurer.hp > 0) {
    ogre.hp -=1;
    adventurer.hp -=1;
    console.log("ogre hp is " + ogre.hp + " and hero's hp is " + adventurer.hp);
    battle();
  } else {
    console.log(adventurer.name + " wins!");
  }
}

battle();

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

var cat1 = {
  name: "Ebbie",
  breed: "black",
  age: 15
}

console.log(cat1.age);
console.log(cat1.breed);

var cat2 = {
  name: "Buster",
  breed: "Tabby",
  age: 2500
}

console.log(cat2.age);
console.log(cat2.breed);


var combineCats = function(mama, papa) {
  console.log(mama);
  console.log(papa);
  var combinedCats = {
    name: mama.name + papa.name,
    age: 1,
    breed: mama.breed +"-"+ papa.breed
  }
  return combinedCats
}

console.log(combineCats(cat1,cat2));


console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

console.log("================================================");


var user = {
  name: "Todd",
  email: "abc@123.com",
  age: 30,
  purchased: []
}
console.log(user);

console.log("22222222222222222222222222");
user.email = "123@abc.com";
user.age++;
console.log(user);

console.log("3333333333333333333333333333333333333333");

user.location = "Djibouti, Djibouti";
console.log(user);

console.log("44444444444444444444444444444444444444444444");

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

console.log("55555555555555555555555555555555555555555555555555555");











console.log("stop");
