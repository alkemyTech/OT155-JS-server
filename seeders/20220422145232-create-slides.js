'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Slides',
      [
        {
          imageUrl:
            'https://cohorte-marzo-77238c6a.s3.amazonaws.com/Logotipo%20campa%C3%B1a%20materiales%20escolares.png',
          text: 'Campaña de materiales escolares',
          order: 1,
          organizationId: '1',
        },
        {
          imageUrl:
            'https://cohorte-marzo-77238c6a.s3.amazonaws.com/Logotipo%20campa%C3%B1a%20juguetes.png',
          text: 'Campaña Juguetes',
          order: 1,
          organizationId: '1',
        },
        {
          imageUrl:
          "https://cohorte-marzo-77238c6a.s3.amazonaws.com/Foto%204.jpg",
          text: 'Somos Más',
          order: 1,
          organizationId: '1',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Slides', null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
