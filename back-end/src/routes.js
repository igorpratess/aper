const express = require('express');
const app = express();
const authenticateRoute = require('../routes/authenticateRoute.js');
const user = require('../routes/user');
const items = require('../routes/items');

app.use('/signup', authenticateRoute);
app.use('/user', user);
app.use('/listing', items);

module.exports = app;