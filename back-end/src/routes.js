const express = require('express');
const app = express();
const authenticateRoute = require('../routes/authenticateRoute.js');

app.use('/signin', authenticateRoute);

module.exports = app;