const json = require('../config/config.json');
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        nickname: DataTypes.STRING,
        contato: DataTypes.STRING,
        dia: DataTypes.STRING,
        mes: DataTypes.STRING,
        ano: DataTypes.STRING,
        senha: DataTypes.STRING
    }, {});
    Usuario.associate = function(models) {
        // associations can be defined here
    };
    return Usuario;
};