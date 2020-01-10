'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_beers = sequelize.define('users_beers', {
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER
  }, {});
  users_beers.associate = function(models) {
  };
  return users_beers;
};