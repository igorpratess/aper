const express = require('express');
const routes = express.Router();
const ItemsFoundController = require('../controllers/ItemsFoundController');

routes.post('', ItemsFoundController.createItemFound);
routes.get('', ItemsFoundController.getItems)

module.exports = routes;