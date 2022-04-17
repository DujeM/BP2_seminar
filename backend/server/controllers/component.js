module.exports = {
    get(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");
        // config for your database

        sql.connect(config, function (err) {
        
            if (err) console.log(err);
    
            var request = new sql.Request();
               
            request.query('SELECT * FROM Component', function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset.recordset);  
            });
    
        });
    },

    create(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");

        sql.connect(config, function (err) {
            if (err) console.log(err);
    
            var request = new sql.Request();
            request.input('Name', sql.NVarChar(50), req.body.Name)
            .input('Price', sql.NVarChar(50), req.body.Price)
            .query(
            'INSERT INTO Component (Name, Price)' +
            `VALUES (@Name, @Price);`, 
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
            request.input('ComponentId', sql.Int, req.params.ComponentId)
            .query('DELETE from Component where ComponentId=@ComponentId',
            function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset);  
            });
        });    
    },
};