const componentController = require('../controllers/component');
const companyController = require('../controllers/company');

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
}