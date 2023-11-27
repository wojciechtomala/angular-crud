// CONFIG FILE - PORT:
const config = require('./config');

// SERVER VARIABLES:
const express = require('express'); // SERVER - Express
const app = express(); // APP - instance of Express
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

// PARSERS:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Database Mongoose connection require:
require('./db/mongoose');

// ROUTES:
app.use('/api/',apiRouter);
// APP LISTENING - SERVER:
app.listen(config.port, function(){
    console.log('SERVER IS LISTENING - PORT: ' + config.port);
});