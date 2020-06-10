'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message: DataTypes.STRING,
    _date: DataTypes.STRING,
    from_user: DataTypes.INTEGER,
    to_user: DataTypes.INTEGER
  }, {});
  Messages.associate = (models) => {
    Messages.belongsTo(models.Usuarios);
  }

  return Messages;
};