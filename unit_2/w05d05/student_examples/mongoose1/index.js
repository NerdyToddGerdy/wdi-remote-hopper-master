var mongoose = require('mongoose');
var db = mongoose.connection;
var Article = require('./article.js');

mongoose.connect('mongodb://localhost:27017/example');

db.once('open', function(){
  console.log('I have connected to mongod!!');
  Article.create({
    title: 'Awesome Title',
    author: 'matt'
  }, function(error, article){
    console.log(error);
    console.log(article);
  });

  Article.find(
    { author: 'matt' },
    function(err, foundArticles){
      console.log(foundArticles);
    }
  );
  


  // Article.update(
  //   { author: 'matt'},
  //   {
  //     $set: {
  //       author: 'Matthew'
  //     }
  //   },
  //   {mulit: true},
  //   function(err, response){
  //     console.log(response);
  //   }
  // );

  // Article.remove(
  //   { author: 'Matthew'},
  //   function(err, response){
  //     console.log(response);
  //   }
  // );
});
