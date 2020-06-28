const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const data = require('../config/config.json');
const usuario = require('../models/usuario');
const dbDev = data.development;
const sequelize = new Sequelize(dbDev.database, dbDev.username, dbDev.password, {
    host: dbDev.host,
    dialect: dbDev.dialect
});
const Messages = require('../models/messages')(sequelize, DataTypes);
const Usuario = require('../models/usuario')(sequelize, DataTypes);
Messages.belongsTo(Usuario, { foreignKey: 'from_user', as: 'fromUser' });
Messages.belongsTo(Usuario, { foreignKey: 'to_user', as: 'toUser' });

async function saveMessages(data) {
    
    await Messages.create({
        message: data.message,
        _date: new Date().toLocaleString(),
        from_user: data.from_user,
        to_user: data.to_user,
        idItem: data.idItem
    });

    let allMsgs = await Messages.findAll({
        where: {
            idItem: data.idItem
        },
        include: [{ model: Usuario, as: 'fromUser' }]
    });

    return allMsgs;

}

async function getAll(req, res) {
    let allMsgs = await Messages.findAll({
        where: {
            idItem: req.body.idItem
        },
        include: [{ model: Usuario, as: 'fromUser' }]
    });

    res.status(200).send(allMsgs);
}

module.exports = { saveMessages, getAll };