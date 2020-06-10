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
        Usuario.hasMany(models.Messages, { as: 'fromUser', foreignKey: 'from_user' });
        Usuario.hasMany(models.Messages, { as: 'toUser', foreignKey: 'to_user' });
        Usuario.hasMany(models.Items, { foreignKey: 'userId' });
    }

    return Usuario;
};