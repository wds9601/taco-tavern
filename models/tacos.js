'use strict';
module.exports = (sequelize, DataTypes) => {
  const tacos = sequelize.define('tacos', {
    name: DataTypes.STRING,
    recipe: DataTypes.STRING,
    baselayerName: DataTypes.STRING,
    baselayerRecipe: DataTypes.STRING,
    condimentName: DataTypes.STRING,
    condimentRecipe: DataTypes.STRING,
    mixinName: DataTypes.STRING,
    mixinRecipe: DataTypes.STRING,
    shellName: DataTypes.STRING,
    shellRecipe: DataTypes.STRING
  }, {});
  tacos.associate = function(models) {
    // associations can be defined here
  };
  return tacos;
};