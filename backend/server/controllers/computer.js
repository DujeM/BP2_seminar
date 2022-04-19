module.exports = {
    get(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");

        sql.connect(config, function (err) {
        
            if (err) console.log(err);
    
            var request = new sql.Request();
               
            request.query('SELECT * FROM Computer', function (err, recordset) {
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
            request.input('Components', sql.Int, req.body.Components)
            .input('TotalPrice', sql.Int, req.body.TotalPrice)
            .query(
            'INSERT INTO Computer (Components, TotalPrice)' +
            `VALUES (@Components, @TotalPrice);`, 
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
            request.input('ComputerId', sql.Int, req.params.ComputerId)
            .query('DELETE from Computer where ComputerId=@ComputerId',
            function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset);  
            });
        });    
    },
};