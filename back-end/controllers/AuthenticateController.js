const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const data = require('../config/config.json');
const dbDev = data.development;
const sequelize = new Sequelize(dbDev.database, dbDev.username, dbDev.password, {
    host: dbDev.host,
    dialect: dbDev.dialect
});
const User = require('../models/usuario.js')(sequelize, DataTypes);

async function autentica(req, res) {
    let { contato, password } = req.body;
    const user = await User.findOne({ where: { contato: contato } });
    res.status(200).send(user);
}

module.exports = { autentica };