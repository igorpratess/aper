const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const data = require('../config/config.json');
const dbDev = data.development;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sequelize = new Sequelize(dbDev.database, dbDev.username, dbDev.password, {
    host: dbDev.host,
    dialect: dbDev.dialect
});
const User = require('../models/usuario.js')(sequelize, DataTypes);

async function store(req, res) {
    let { nome, nickname, contato, dia, mes, ano, senha } = req.body;
    let user = await User.findOne({ where: { contato: contato } });

    if (user) {
        return res.status(200).send('Dados inválidos');
    }

    user = await User.create({
        nome: nome,
        nickname: nickname,
        contato: contato,
        dia: dia,
        mes: mes,
        ano: ano,
        senha: bcrypt.hashSync(senha, 8)
    });

    res.status(201).send('Usuário criado!');
}

module.exports = { store };