var cheerio = require('cheerio');
var request = require('request');
var articleInfo = [];

// $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="reds"><li class="apple">Gala</li><li class="apple">Braeburn</li><li class="tomato">Tomato</li></ul>');
//
// console.log($('.apple', '#fruits').text());
 request('https://news.google.com', function(err, response, body){
   if (!err && response.statusCode == 200) {
      var $ = cheerio.load(body);
      $('.article', '.lt-col').each(function(){
         var articleObj = {};
         articleObj.headline = $(this).text();
         articleObj.url = $(this).attr('href');
         articleInfo.push(articleObj);
      });
   }
   console.log(articleInfo[0]);
});
