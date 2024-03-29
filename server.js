


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');



var app = express();
var PORT = process.env.PORT || 8080;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



apiRoutes(app); 
htmlRoutes(app); 


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});