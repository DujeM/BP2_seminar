module.exports = {
    get(req, res) {
        var sql = require("mssql");
        var config = require("../../config/config");

        sql.connect(config, function (err) {
        
            if (err) console.log(err);
    
            var request = new sql.Request();
               
            request.query('SELECT * FROM Order', function (err, recordset) {
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
            request.input('Price', sql.Int, req.body.Name)
            .input('OrderDate', sql.Date, req.body.Price)
            .query(
            'INSERT INTO Order (Price, OrderDate)' +
            `VALUES (@Price, @OrderDate);`, 
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
            request.input('OrderId', sql.Int, req.params.OrderId)
            .query('DELETE from Order where OrderId=@OrderId',
            function (err, recordset) {
                if (err) console.log(err)

                res.send(recordset);  
            });
        });    
    },
};