var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
  
require('./routes')(app);

var server = app.listen(3000, function () {
    console.log('Server is running..');
});