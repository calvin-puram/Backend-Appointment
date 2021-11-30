module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    id_doctor: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    expertise: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'Clínico Geral',
    },

    birth_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Doctor.associate = (models) => {
    Doctor.belongsTo(models.Appointment, {
      foreignKey: 'id_doctor',
      allowNull: false,
    });
  };

  return Doctor;
};
