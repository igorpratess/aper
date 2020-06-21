#!/usr/bin/env node

/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const debug = require('debug')('teste-tg1:server');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);
app.use(express.json());
app.use(cors());
app.use(cookieParser());
/**
 * Create HTTP server.
 */

const server = http.createServer(app);
const io = require('socket.io')(server);

server.setTimeout(360000);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        console.log(`App funcionando na porta: ${port}`)
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}

const routes = require('./src/routes.js');
app.use(routes);

const MessagesController = require('./controllers/MessagesController');

io.on('connection', socket => {
    // toda vez que um novo cliente se conectar 
    console.log(`Socket conectado: ${socket.id}`);

    socket.on('sendMessage', data => {
        let response = MessagesController.saveMessages(data);
        response.then(res => {
            socket.emit('receivedMessage', res);
            socket.broadcast.emit('receivedMessage', res);
        }).catch(err => {
            console.log(err)
        });
    });
});