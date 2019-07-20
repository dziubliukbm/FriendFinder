const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
require('../routing/apiRoutes.js')(app);
require('../routing/htnlRoutes.js')(app);



app.listen(PORT, function(){
    console.log('App lisening on PORT: ' + PORT);
});
