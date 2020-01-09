'use strict';
module.exports = (sequelize, DataTypes) => {
  const tacos = sequelize.define('tacos', {
    name: DataTypes.STRING,
    recipe: DataTypes.TEXT,
    recipeUrl: DataTypes.STRING,
    baseName: DataTypes.STRING,
    baseRecipe: DataTypes.TEXT,
    baseUrl: DataTypes.STRING,
    condimentName: DataTypes.STRING,
    condimentRecipe: DataTypes.TEXT,
    condimentUrl: DataTypes.STRING,
    mixinName: DataTypes.STRING,
    mixinRecipe: DataTypes.TEXT,
    mixinUrl: DataTypes.STRING,
    shellName: DataTypes.STRING,
    shellRecipe: DataTypes.TEXT,
    shellUrl: DataTypes.STRING
  }, {});
  tacos.associate = function(models) {
    models.tacos.belongsToMany(models.user, {
      through: 'users_tacos',
      onDelete: 'CASCADE'
    })
  };
  return tacos;
};