/* eslint-disable class-methods-use-this */
const models = require('../models');

const { Appointment } = models;

class AppointmentController {
  async index(req, res) {
    try {
      const appointments = await Appointment.findAll({
        include: { all: true },
      });

      return res.status(200).json({
        success: true,
        count: appointments.length,
        appointments,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);

      return res.status(200).json({
        success: true,
        appointment,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const appointment = await Appointment.create(req.body);

      return res.status(201).json(appointment);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);

      await appointment.update(req.body);

      return res.status(200).json({ appointment });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);

      await appointment.destroy();

      return res.status(204).json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AppointmentController();
