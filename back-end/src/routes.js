const express = require('express');
const app = express();
const authenticateRoute = require('../routes/authenticateRoute.js');
const user = require('../routes/user');

app.use('/signin', authenticateRoute);
app.use('/user', user);

module.exports = app;