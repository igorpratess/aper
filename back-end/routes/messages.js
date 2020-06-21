const express = require('express');
const routes = express.Router();
const MessagesController = require('../controllers/MessagesController');

routes.post('', MessagesController.getAll);

module.exports = routes;