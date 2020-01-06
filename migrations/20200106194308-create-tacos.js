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
        type: Sequelize.STRING
      },
      baselayerName: {
        type: Sequelize.STRING
      },
      baselayerRecipe: {
        type: Sequelize.STRING
      },
      condimentName: {
        type: Sequelize.STRING
      },
      condimentRecipe: {
        type: Sequelize.STRING
      },
      mixinName: {
        type: Sequelize.STRING
      },
      mixinRecipe: {
        type: Sequelize.STRING
      },
      shellName: {
        type: Sequelize.STRING
      },
      shellRecipe: {
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