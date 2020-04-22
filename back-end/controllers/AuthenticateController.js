const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const data = require('../config/config.json');
const dbDev = data.development;
const bcrypt = require('bcrypt');
const sequelize = new Sequelize(dbDev.database, dbDev.username, dbDev.password, {
    host: dbDev.host,
    dialect: dbDev.dialect
});
const User = require('../models/usuario.js')(sequelize, DataTypes);
const jwt = require('jsonwebtoken');

async function autentica(req, res) {
    let { contato, password } = req.body;
    const user = await User.findOne({ where: { contato: contato } });

    if (user == null) {
        res.status(404).send('Email ou senha não encontrado');
    }
    const comparePassw = await bcrypt.compare(password, user.senha);
    if (!comparePassw) {
        res.status(404).send('Email ou senha não encontrado');
    }
    const token = jwt.sign({ contato }, 'shhhhh', { expiresIn: '1h' });
    user.dataValues.token = token;
    res.status(200).send(user);
}

module.exports = { autentica };