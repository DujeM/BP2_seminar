module.exports = {
    get(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");

        sql.connect(config, function (err) {
        
            if (err) console.log(err);
    
            var request = new sql.Request();
               
            request.query('SELECT * FROM Company', function (err, recordset) {
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
            request.input('Name', sql.NVarChar(50), req.body.Name)
            .input('Price', sql.NVarChar(50), req.body.Price)
            .query(
            'INSERT INTO Company (Name, Email, Location, CompanyOib)' +
            `VALUES (@Name, @Email, @Location, @CompanyOib);`, 
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
            request.input('CompanyId', sql.Int, req.params.CompanyId)
            .query('DELETE from Company where CompanyId=@CompanyId',
            function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset);  
            });
        });    
    },
};