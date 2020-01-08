'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'githubId', Sequelize.STRING).then(()=> {
      return queryInterface.addColumn('users', 'githubToken', Sequelize.STRING)
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'githubId').then(()=> {
      return queryInterface.addColumn('users', 'githubToken')
    })
  }
};
