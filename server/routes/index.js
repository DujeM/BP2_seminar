const componentController = require('../controllers/component');

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
}