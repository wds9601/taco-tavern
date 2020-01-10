'use strict';

let bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg: 'Cmon, you have a first name, right?'
        }
      }
    },
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Hey, Please give a valid email address! :D'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 25],
          msg: 'Your password must be between 6 and 25 characters. Please try again!'
        }
      }
    },
    bio: DataTypes.TEXT,
    githubId: DataTypes.STRING,
    githubToken: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: pendingUser => {
        if (pendingUser && pendingUser.password) {
          //Hash the password
          let hashedPassword = bcrypt.hashSync(pendingUser.password, 12)
          //Reassign the password field with the hashed value
          pendingUser.password = hashedPassword  //This whole thing can be written on one line "let pendingUser.password = bcrypt.hashSync(pendingUser.password, 12)"
        }
      }
    }
  });

  user.associate = function(models) {
    models.user.belongsToMany(models.beers, {
      through: 'users_beers',
      onDelete: 'CASCADE'
    }),
    models.user.belongsToMany(models.tacos, {
      through: 'users_tacos',
      onDelete: 'CASCADE'
    })
  };

  user.prototype.validPassword = function(typedInPassword) {
    //Determine if typedInPassword hashes to the same thing as the existing hash
    let correctPassword = bcrypt.compareSync(typedInPassword, this.password)
    //Return the result of that comparison
    return correctPassword
  }

  return user;
};