module.exports = {
    get(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");
        // config for your database

        sql.connect(config, function (err) {
        
            if (err) console.log(err);
    
            var request = new sql.Request();
               
            request.query('SELECT * FROM Customer', function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset);  
            });
    
        });
    },

    create(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");

        sql.connect(config, function (err) {
            if (err) console.log(err);
    
            var request = new sql.Request();
            request.input('FullName', sql.NVarChar(50), req.body.Name)
            .input('Location', sql.NVarChar(50), req.body.Location)
            .input('Email', sql.NVarChar(50), req.body.Email)
            .query(
            'INSERT INTO Customer (FullName, Location, Email)' +
            `VALUES (@FullName, @Location, @Email);`, 
            function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset);  
            });
        });    
    },

    delete(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");

        sql.connect(config, function (err) {
            if (err) console.log(err);
    
            var request = new sql.Request();
            request.input('CustomerId', sql.Int, req.params.CustomerId)
            .query('DELETE from Customer where CustomerId=@CustomerId',
            function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset);  
            });
        });    
    },
};