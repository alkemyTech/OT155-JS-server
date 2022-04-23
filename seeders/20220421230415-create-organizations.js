'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'Somos Más',
          phone: '1160112988',
          imageUrl:
            'https://cohorte-marzo-77238c6a.s3.amazonaws.com/LOGO-SOMOS%20MAS.png',
          address: 'Avenida SiempreViva 742',
          welcomeText: 'Proyecto ONG - Somos Más',
          urlFacebook: 'https://es-la.facebook.com/public/Somos_Más',
          urlLinkedin: 'https://www.linkedin.com/in/SomosMás',
          urlInstagram: 'https://www.instagram.com/SomosMás',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Organizations', null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
