var express = require('express');
var path = require('path');
var app = express();
 
//[color=#ff0000]
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'youyi')));
//[/color]
 
app.listen(8080, function() {
 console.log('App listening at port 8080;');
});