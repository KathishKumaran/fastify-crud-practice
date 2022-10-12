"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      door_no: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      pin_code: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      taluk: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      mobile: {
        type: Sequelize.STRING(35),
        allowNull: false,
      },
      landline: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(241),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addIndex("customers", ["name", "email", "mobile"]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("customers");
  },
};
