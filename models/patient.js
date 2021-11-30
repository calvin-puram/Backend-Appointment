module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id_patient: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          if (value === '') {
            throw new Error('Empty Name');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    birth_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          if (value === '') {
            throw new Error('Empty Password');
          }
        },
      },
    },
  });

  Patient.associate = (models) => {
    Patient.hasMany(models.Appointment, {
      foreignKey: 'id_patient',
      allowNull: false,
    });
  };

  return Patient;
};
