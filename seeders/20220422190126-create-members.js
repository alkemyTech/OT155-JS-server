"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          name: "Maria Iraola",
          imageUrl: "https://i.imgur.com/PfFzsMN.jpeg",
          role: "Presidenta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marita Gomez",
          imageUrl: "https://i.imgur.com/1h0hFCs.jpeg",
          role: "Fundadora",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miriam Rodriguez",
          imageUrl: "https://i.imgur.com/fNlae2H.jpeg",
          role: "Terapista Ocupacional",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cecilia Mendez",
          imageUrl: "https://i.imgur.com/KZ3pWp3.jpeg",
          role: "Psicopedagoga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rodrigo Fuente",
          imageUrl: "https://i.imgur.com/SkWUnSO.jpeg",
          role: "Contador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Garcia",
          imageUrl: "https://i.imgur.com/7BMDWUf.jpeg",
          role: "Profesora de Artes Dramáticas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marco Fernandez",
          imageUrl: "https://i.imgur.com/KCkogLi.jpeg",
          role: "Profesor de Educación Física",
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
