require('dotenv/config');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const port = process.env.SERVER_PORT;
const { sequelize } = require('./models');

const patientRouter = require('./routes/Patient');
const doctorRouter = require('./routes/Doctor');
const appointmentRouter = require('./routes/Appointment');

const app = express();

app.use(helmet());
app.use(cors(), (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use(hpp());
app.use(mongoSanitize());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// rate limit
app.use('/api/', limiter);
app.use(xss());

app.use('/api/v1/patient', patientRouter);
app.use('/api/v1/doctor', doctorRouter);
app.use('/api/v1/appointment', appointmentRouter);

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
