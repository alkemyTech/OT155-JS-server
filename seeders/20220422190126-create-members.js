"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          name: "Maria Iraola",
          imageUrl: "https://i.imgur.com/PfFzsMN.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marita Gomez",
          imageUrl: "https://i.imgur.com/1h0hFCs.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miriam Rodriguez",
          imageUrl: "https://i.imgur.com/fNlae2H.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cecilia Mendez",
          imageUrl: "https://i.imgur.com/KZ3pWp3.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rodrigo Fuente",
          imageUrl: "https://i.imgur.com/SkWUnSO.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Garcia",
          imageUrl: "https://i.imgur.com/7BMDWUf.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marco Fernandez",
          imageUrl: "https://i.imgur.com/KCkogLi.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Members", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
