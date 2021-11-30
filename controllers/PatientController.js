/* eslint-disable class-methods-use-this */
const Sequelize = require('sequelize');
const models = require('../models');

const { Patient } = models;
const { Op } = Sequelize;

class PatientController {
  async index(req, res) {
    try {
      const patients = await Patient.findAll({
        order: [['name', 'ASC']],
      });
      return res.status(200).json({
        success: true,
        count: patients.length,
        patients,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);

      return res.status(200).json({
        success: true,
        patient,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async findByName(req, res) {
    const varName = `${req.params.name}`;
    try {
      const patients = await Patient.findAll({
        where: {
          name: {
            [Op.like]: `%${varName}%`,
          },
        },
        order: [['name', 'ASC']],
      });
      return res.status(200).json({
        success: true,
        count: patients.length,
        patients,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      console.log(req.body);
      const patient = await Patient.create(req.body);

      return res.status(201).json(patient);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);

      await patient.update(req.body);

      return res.status(200).json({
        success: true,
        patient,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);

      await patient.destroy();

      return res.status(204).json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PatientController();
