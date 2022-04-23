"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Noticias",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Campañas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Actividades",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ONG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Otras",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
