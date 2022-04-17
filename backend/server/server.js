var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
  
require('./routes')(app);

var server = app.listen(3000, function () {
    console.log('Server is running..');
});
