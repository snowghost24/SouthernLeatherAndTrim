var express = require ('express');
var app = express();
app.listen(3001);
app.get('/',function(request,response){
   // response.send('this is a string')
   response.sendFile(__dirname +'/index.html')
});

