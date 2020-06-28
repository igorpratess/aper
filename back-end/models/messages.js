'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message: DataTypes.STRING,
    _date: DataTypes.STRING,
    from_user: DataTypes.INTEGER,
    to_user: DataTypes.INTEGER,
    idItem: DataTypes.INTEGER
  }, {});
  // Messages.associate = (models) => {

  // }

  return Messages;
};