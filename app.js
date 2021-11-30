require('dotenv/config');
const express = require('express');
const cors = require('cors');

const port = process.env.SERVER_PORT;
const { sequelize } = require('./models');

const patientRouter = require('./routes/Patient');
const doctorRouter = require('./routes/Doctor');

const app = express();

app.use(cors(), (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use('/api/v1/patient', patientRouter);
app.use('/api/v1/doctor', doctorRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log('DataBase connected.');
  })
  .catch((err) => {
    console.error('Unable to connect do DataBase: ', err);
  });

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

module.exports = app;
