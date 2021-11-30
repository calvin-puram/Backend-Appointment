const { Router } = require('express');
const AppointmentController = require('../controllers/AppointmentController');

const routes = Router();

routes.get('/', AppointmentController.index);
routes.get('/:id', AppointmentController.show);
routes.post('/', AppointmentController.store);
routes.put('/:id', AppointmentController.update);
routes.delete('/:id', AppointmentController.destroy);

module.exports = routes;
