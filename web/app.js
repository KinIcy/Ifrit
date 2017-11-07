/**
 * @fileOverview Contains the entry point of execution for the server.
 * @version 0.0.1
 * @author Jason Sebastian Lopez
 */

// include packages required.
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

// app setup,
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

// routes setup
app.use('/api', router);

const listener = app.listen(process.env.PORT || '8080', () => {
  console.log(`Server Runnig at port ${listener.address().port}`);
});
