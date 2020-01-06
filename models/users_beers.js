'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_beers = sequelize.define('users_beers', {
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER
  }, {});
  users_beers.associate = function(models) {
    // associations can be defined here
  };
  return users_beers;
};