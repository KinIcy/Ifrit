/**
 * @fileOverview Contains the entry point of execution for the server.
 * @author Jason Sebastian Lopez
 * @author Daniel Hernandez Cuero
 */

// include packages required.
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config');


// app setup,
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH, OPTIONS');
  next();
});

// routes setup
app.use('/api', router);


mongoose.connect(config.db, { useMongoClient: true }, (err) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  console.log('Conexión a la base de datos establecida...');
  const listener = app.listen(process.env.PORT || '8080', () => {
    console.log(`Servidor corriendo en  ${listener.address().port}`);
  });
});
