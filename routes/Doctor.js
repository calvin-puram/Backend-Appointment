const routes = require('express').Router();
const DoctorController = require('../controllers/DoctorController');

routes.get('/', DoctorController.index);
routes.get('/:name', DoctorController.findByName);
routes.post('/', DoctorController.store);
routes.put('/:id', DoctorController.update);
routes.delete('/:id', DoctorController.destroy);

module.exports = routes;
