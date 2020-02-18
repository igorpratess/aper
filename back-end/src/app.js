const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const conexao = require('./conexao');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + 'public')));

app.get('/', function(req, res) {
    res.status(conexao).send(bodyParser);
});

app.listen(3000, function() {
    console.log('a')
});

app.set('port', 3000);

module.exports = app;