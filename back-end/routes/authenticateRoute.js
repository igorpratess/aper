const authenticateController = require('../controllers/AuthenticateController.js');
const express = require('express');
const routes = express.Router();

routes.post('/', authenticateController.autentica);

module.exports = routes;