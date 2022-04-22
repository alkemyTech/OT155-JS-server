'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      welcomeText: {
        type: Sequelize.STRING,
      },
      urlFacebook: {
        type: Sequelize.STRING,
      },
      urlLinkedin: {
        type: Sequelize.STRING,
      },
      urlInstagram: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Organizations');
  },
};
