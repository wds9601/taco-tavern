'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tacos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      recipe: {
        type: Sequelize.TEXT
      },
      recipeUrl: {
        type: Sequelize.STRING
      },
      baseName: {
        type: Sequelize.STRING
      },
      baseRecipe: {
        type: Sequelize.TEXT
      },
      baseUrl: {
        type: Sequelize.STRING
      },
      condimentName: {
        type: Sequelize.STRING
      },
      condimentRecipe: {
        type: Sequelize.TEXT
      },
      condimentUrl: {
        type: Sequelize.STRING
      },
      mixinName: {
        type: Sequelize.STRING
      },
      mixinRecipe: {
        type: Sequelize.TEXT
      },
      mixinUrl: {
        type: Sequelize.STRING
      },
      shellName: {
        type: Sequelize.STRING
      },
      shellRecipe: {
        type: Sequelize.TEXT
      },
      shellUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tacos');
  }
};