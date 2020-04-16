const express = require('express');
const routes = express.Router();
const User = require('../src/user.js');
const withAuth = require('./middleware/middleware');

routes.get('/', withAuth, (req, res) => { return res.status(200).send('será que deu certo crl?') });

module.exports = routes;