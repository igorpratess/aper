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
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Messages, { as: 'sentMessages' });
        Usuario.hasMany(models.Messages, { as: 'receivedMessages' });
        Usuario.hasMany(models.Items, { foreignKey: 'userId' });
    }

    return Usuario;
};