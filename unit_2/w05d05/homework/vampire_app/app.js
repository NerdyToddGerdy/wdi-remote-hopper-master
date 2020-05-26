// 1. Require your node modules
var mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
var Vampire = require('./models/vampire.js');
var vampireData = require('./populateVampires.js');
// 3. Connect your database and collection name
var db = mongoose.connection;
var vampireCollection = [];
// 4. Open your mongoose connection
mongoose.connect('mongodb://localhost:27017/monsters');
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
db.once('open', function(){
  console.log('This part is working');
  Vampire.collection.insertMany(vampireData,
  function(err, data) {
    console.log("added provided vampire data");
    mongoose.connection.close();
  });
  // ### Add some new vampire data

Vampire.create(
  {
  name: "Count Dweezil",
  hair_color: "brown",
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['food','screaming like a little girl'],
  location: 'somewhere, US',
  gender: 'f',
  victims: 17
},{
name: "Count Rufio",
hair_color: "brown",
eye_color: 'brown',
dob: new Date(1971, 2, 13, 7, 47),
loves: ['Squirrel','DEER!!!'],
location: 'At my feet',
gender: 'm',
victims: 4
},{
name: "Count Alicia",
hair_color: "brown",
eye_color: 'brown',
dob: new Date(1987, 2, 17, 7, 47),
loves: ['to love','to art'],
location: 'Manassass, Va, US',
gender: 'f',
victims: 7
},{
name: "Count James",
hair_color: "brown",
eye_color: 'brown',
dob: new Date(2014, 12, 17, 2, 30),
loves: ['George','mama'],
location: 'My back room, US, that bum',
gender: 'm',
victims: 486
}
);


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find(
//   {gender: 'f'},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//   {victims: {$gt: 500}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//   {victims: {$lte: 150}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//   {victims: {$ne: 210234}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//   {victims:
//     {$gt:150, $lt:500}
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find(
//   {title:{$exists: true}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//   {victims:{$exists: false}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//   {title:{$exists: true},victims:{$exists: false}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//   {victims:{$exists: true, $gt: 1000}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find(
//   {
//     $or:[
//       {location: 'New York, New York, US'},
//       {location: 'New Orleans, Louisiana, US'}
//     ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//   {
//     $or:[
//       {loves: 'brooding'},
//       {location: 'being tragic'}
//     ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//   {
//     $or:[
//       {victims: {$gt:1000}},
//       {loves: 'marshmallows'}
//     ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//   {
//     $or:[
//       {hair_color:'red'},
//       {eye_color: 'green'}
//     ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );




/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find(
//   {
//       $or:
//       [
//         {loves: 'frilly shirtsleeves'},
//         {loves: 'frilly collars'}
//       ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//   {
//       $or:
//       [
//         {loves: 'brooding'}
//       ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//   {
//       $or:
//       [
//         {loves: 'appearing innocent'},
//         {loves: 'trickery'},
//         {loves: 'lurking in rotting mansions'},
//         {loves: 'R&B music'}
//       ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//   {
//     $and:[
//       {loves:{$nin:['top hats', 'virgin blood']}},
//       {loves:'fancy cloaks'}
//     ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find(
//   {
//     $and:[
//       {eye_color:{$nin:['brown']}},
//       {loves:'ribbons'}
//     ]
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//       {location:{$nin:['Rome']}
//   },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );


// Vampire.find(
//       {loves:{$nin:['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being innocent','being tragic','brooding']}},
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

// Vampire.find(
//     {victims:{
//         $not:{$gt: 200}
//       }
//     },
//   function(err, foundVampire){
//     console.log(foundVampire);
//   }
// );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE


//Vampire.collection.findOneAndUpdate
Vampire.replaceOne(
  {name: 'Claudia'},
     {name: 'Eve',portrayed_by: 'Tilda Swinton'},
  function(err, foundVampire){

    console.log(foundVampire);
  }
);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
}
);
