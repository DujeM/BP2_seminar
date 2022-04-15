var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    let config = {
        server: 'localhost',
        authentication: {
            type: 'default',
            options: {
                userName: 'admin', // update me
                password: 'Admin12345' // update me
            }
        },
        options: {
            database: 'PcShop',
            validateBulkLoadParameters:false,
            encrypt: false,
        }
    }
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM Customers', function (err, recordset) {
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(3000, function () {
    console.log('Server is running..');
});