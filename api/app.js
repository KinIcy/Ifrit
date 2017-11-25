/**
 * @fileOverview Contains the entry point of execution for the server.
 * @author Jason Sebastian Lopez
 * @author Daniel Hernandez Cuero
 */

require('dotenv');

// include packages required.
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// components
const router = require('./routes');

// app setup,
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH, OPTIONS');
  next();
});

// routes setup
app.use('/api', router);

mongoose.connect('mongodb://db:27017/Irim', { useMongoClient: true }, (err) => {
  if (err) {
    process.stderr.write(`Error al conectar a la base de datos: ${err}\n`);
  } else {
    process.stdout.write('Conexión a la base de datos establecida...\n');
    const listener = app.listen(process.env.PORT || '8080', () => {
      process.stdout.write(`Servidor corriendo en  ${listener.address().port}\n`);
    });
  }
});
