'use strict';
module.exports = (sequelize, DataTypes) => {
  const beers = sequelize.define('beers', {
    name: DataTypes.STRING,
    tagline: DataTypes.STRING,
    description: DataTypes.STRING,
    abv: DataTypes.INTEGER,
    hops: DataTypes.STRING,
    foodPairing: DataTypes.STRING
  }, {});
  beers.associate = function(models) {
    // associations can be defined here
  };
  return beers;
};