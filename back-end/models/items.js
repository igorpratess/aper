'use strict';
module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define('Items', {
        location: DataTypes.STRING,
        typeItem: DataTypes.STRING,
        name: DataTypes.STRING,
        date: DataTypes.STRING,
        description: DataTypes.STRING,
        itemType: DataTypes.STRING,
        images: DataTypes.STRING
    }, {});
    Items.associate = (models) => {
        Items.belongsTo(models.Usuarios);
    }

    return Items;
};