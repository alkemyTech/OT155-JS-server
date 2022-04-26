'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Slides',
      [
        {
          imageUrl:
            'https://i.imgur.com/TNto95Y.png',
          text: 'Campaña de materiales escolares',
          order: 1,
          organizationId: '1',
        },
        {
          imageUrl:
            'https://i.imgur.com/HMGCilo.png',
          text: 'Campaña Juguetes',
          order: 1,
          organizationId: '1',
        },
        {
          imageUrl:
          "https://i.imgur.com/EQ3ucOI.png",
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
