"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("employees", {
      id: {
        type: Sequelize.DataTypes.INTEGER({ unsigned: true }),
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.DataTypes.ENUM(["m", "f"]),
        allowNull: false
      },
      age: {
        type: Sequelize.DataTypes.TINYINT({ unsigned: true }),
        allowNull: false
      },
      role: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      salary: {
        type: Sequelize.DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("employees");
  }
};
