const express = require('express');
const app = express();
const authenticateRoute = require('../routes/authenticateRoute.js');
const user = require('../routes/user');

app.use('/signup', authenticateRoute);
app.use('/user', user);

module.exports = app;