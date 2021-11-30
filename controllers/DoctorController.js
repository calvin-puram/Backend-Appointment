/* eslint-disable class-methods-use-this */
const Sequelize = require('sequelize');
const models = require('../models');

const { Doctor } = models;
const { Op } = Sequelize;

class DoctorController {
  async index(req, res) {
    try {
      const doctors = await Doctor.findAll({
        order: [['name', 'ASC']],
      });
      return res.status(200).json({
        success: true,
        count: doctors.length,
        doctors,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const doctor = await Doctor.findByPk(req.params.id);

      return res.status(200).json({
        success: true,
        doctor,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async findByName(req, res) {
    const varName = `${req.params.name}`;
    try {
      const doctors = await Doctor.findAll({
        where: {
          name: {
            [Op.like]: `%${varName}%`,
          },
        },
        order: [['name', 'ASC']],
      });
      return res.status(200).json({
        success: true,
        count: doctors.length,
        doctors,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const doctor = await Doctor.create(req.body);

      return res.status(201).json(doctor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const doctor = await Doctor.findByPk(req.params.id);

      await doctor.update(req.body);

      return res.status(200).json({
        success: true,
        doctor,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const doctor = await Doctor.findByPk(req.params.id);

      await doctor.destroy();

      return res.status(204).json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new DoctorController();
