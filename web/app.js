/**
 * @fileOverview Contains the entry point of execution for the server.
 * @version 0.0.1
 * @author Jason Sebastian Lopez
 */

// include packages required.
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const router = require('./routes');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

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
}));
app.use(passport.initialize());
app.use(passport.session());

// routes setup
app.use('/api', router);

const listener = app.listen(process.env.PORT || '8080', () => {
  console.log(`Server Runnig at port ${listener.address().port}`);
});
