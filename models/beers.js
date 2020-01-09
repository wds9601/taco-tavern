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
    models.beers.belongsToMany(models.user, {
      through: 'users_beers',
      onDelete: 'CASCADE'
    })
  }
  return beers;
};