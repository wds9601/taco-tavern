'use strict';
module.exports = (sequelize, DataTypes) => {
  const beers = sequelize.define('beers', {
    name: DataTypes.STRING,
    tagline: DataTypes.STRING,
    description: DataTypes.TEXT,
    abv: DataTypes.DECIMAL,
    hops: DataTypes.STRING,
    foodPairing: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  }, {});
  beers.associate = function(models) {
    // associations can be defined here
  };
  return beers;
};