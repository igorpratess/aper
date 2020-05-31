const express = require('express');
const app = express();
const authenticateRoute = require('../routes/authenticateRoute.js');
const user = require('../routes/user');
const itemsFound = require('../routes/itemsFound');

app.use('/signup', authenticateRoute);
app.use('/user', user);
app.use('/listing', itemsFound);

module.exports = app;