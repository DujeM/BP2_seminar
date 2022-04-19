const componentController = require('../controllers/component');
const companyController = require('../controllers/company');
const customerController = require('../controllers/customer')
const orderController = require('../controllers/order');
const computerController = require('../controllers/computer');

module.exports = (app) => {
    app.get('/api/components', function (req, res) {
        return componentController.get(req, res);
    });

    app.post('/api/components/new', function (req, res) {
        return componentController.create(req, res);
    });

    app.get('/api/components/delete/:ComponentId', function (req, res) {
        return componentController.delete(req, res);
    });

    app.get('/api/company', function (req, res) {
        return companyController.get(req, res);
    });

    app.post('/api/company/new', function (req, res) {
        return companyController.create(req, res);
    });

    app.get('/api/company/delete/:CompanyId', function (req, res) {
        return companyController.delete(req, res);
    });

    app.get('/api/customer', function (req, res) {
        return customerController.get(req, res);
    });

    app.post('/api/customer/new', function (req, res) {
        return customerController.create(req, res);
    });

    app.get('/api/customer/delete/:CustomerId', function (req, res) {
        return customerController.delete(req, res);
    });

    app.get('/api/order', function (req, res) {
        return orderController.get(req, res);
    });

    app.post('/api/order/new', function (req, res) {
        return orderController.create(req, res);
    });

    app.get('/api/order/delete/:OrderId', function (req, res) {
        return orderController.delete(req, res);
    });

    app.get('/api/computer', function (req, res) {
        return computerController.get(req, res);
    });

    app.post('/api/computer/new', function (req, res) {
        return computerController.create(req, res);
    });

    app.get('/api/computer/delete/:ComputerId', function (req, res) {
        return computerController.delete(req, res);
    });
}