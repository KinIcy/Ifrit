/**
 * @fileOverview Contains the entry point of execution for the server.
 * @author Jason Sebastian Lopez
 * @author Daniel Hernandez Cuero
 */

// include packages required.
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const router = require('./routes');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const config = require('./config');


// app setup,
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.use(session({
  secret: process.env.SESSION_SECRET || 'averyveryverysecretsecret',
  saveUninitialized: true,
  resave: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// routes setup
app.use('/api', router);


mongoose.connect(config.db,{ useMongoClient: true }, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  console.log('Conexión a la base de datos establecida...');
  const listener = app.listen(process.env.PORT || '8080', () => {
    console.log(`Servidor corriendo en  ${listener.address().port}`);
  });
});
