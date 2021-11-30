module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    id_appointment: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    date_scheduled: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.Patient, {
      foreignKey: 'id_patient',
      allowNull: false,
    });
    Appointment.belongsTo(models.Doctor, {
      foreignKey: 'id_doctor',
      allowNull: false,
    });
  };

  return Appointment;
};
