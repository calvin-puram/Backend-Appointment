const routes = require('express').Router();
const PatientController = require('../controllers/PatientController');

routes.get('/', PatientController.index);
routes.get('/:name', PatientController.findByName);
routes.post('/', PatientController.store);
routes.put('/:id', PatientController.update);
routes.delete('/:id', PatientController.destroy);

module.exports = routes;
