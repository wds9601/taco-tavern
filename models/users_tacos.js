'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_tacos = sequelize.define('users_tacos', {
    userId: DataTypes.INTEGER,
    tacoId: DataTypes.INTEGER
  }, {});
  users_tacos.associate = function(models) {
    // associations can be defined here
  };
  return users_tacos;
};