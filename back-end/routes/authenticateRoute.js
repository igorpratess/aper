const authenticateController = require('../controllers/AuthenticateController.js');
const express = require('express');
const routes = express.Router();
const User = require('../src/user.js');

routes.post('/', authenticateController.autentica);

module.exports = routes;