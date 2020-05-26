var express = require('express'),
    app     = express(),
    port    = 2045 || process.env.PORT;

app.use(express.static('public'));

app.listen(port, function(){
   console.log("Dating App Frontend running on port: ", port);
});
