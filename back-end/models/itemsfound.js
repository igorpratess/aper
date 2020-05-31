'use strict';
module.exports = (sequelize, DataTypes) => {
    const ItemsFound = sequelize.define('ItemsFound', {
        location: DataTypes.STRING,
        typeItem: DataTypes.STRING,
        name: DataTypes.STRING,
        date: DataTypes.STRING,
        description: DataTypes.STRING,
        images: DataTypes.STRING
    }, {});
    ItemsFound.associate = function(models) {
        // associations can be defined here
    };
    return ItemsFound;
};