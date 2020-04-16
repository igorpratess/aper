const express = require('express');
const routes = require('./routes');
const server = express(true);

server.use(express.json());
server.use(routes);

server.listen(3333);