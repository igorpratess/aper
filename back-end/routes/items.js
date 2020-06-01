const express = require('express');
const routes = express.Router();
const ItemsController = require('../controllers/ItemsController');

routes.post('', ItemsController.createItemFound);
routes.get('', ItemsController.getItems)

module.exports = routes;