module.exports = {
  up: (queryInterface, Sequelize) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    queryInterface.createTable('appointment', {
      id_appointment: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_patient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Patient',
          key: 'id_patient',
        },
        onDelete: 'RESTRICT',
      },
      id_doctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Doctor',
          key: 'id_doctor',
        },
        onDelete: 'RESTRICT',
      },
      date_scheduled: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('appointment'),
};
