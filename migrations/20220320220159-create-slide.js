"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Slides", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      organizationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      deleteAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'
        ),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Slides");
  },
};
