'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Entries',
      [
        {
          name: '¡Comenzamos los talleres de apoyo escolar!',
          content:
            "¡Ya arrancamos con todos los talletes de apoyo escolar! Contamos con un equipo de docentes y voluntarias calificadas que acompañan a los chicos en la curricula escolar con programas acordes a cada edad. Tenemos también un área de psicopedagogía para chicos con dificultades academicas donde se los apoya de manera personalizada.",
          imageUrl: 'https://i.imgur.com/B26MMII.jpg',
          categoryId: 3,
          Type: 'APOYO ESCOLAR',
          createdAt: '2022-03-11 05:42:14',
          updatedAt: '2022-04-23 09:59:10',
        },
        {
          name: 'Seguimos mejorando la salud y nutrición de nuestros chicos',
          content:
            'Creemos que la alimentación es fundamental para un buen desarrollo y aprendizaje. Contamos con una Nutricionista para el diseño de los menús y seguimiento de los chicos a lo largo del año. Realizamos talleres de alimentación con las madres para reforzar buenos hábitos de higiene y alimentarios.',
          imageUrl: 'https://i.imgur.com/x8yXdWA.jpg',
          categoryId: 3,
          Type: 'SALUD Y NUTRICIÓN',
          createdAt: '2022-03-16 00:29:45',
          updatedAt: '2022-03-06 15:35:14',
        },
        {
          name: '¡Nuevos talleres pre-deportivos!',
          content:
            'La actividades físicas son un medio eficaz para facilitar la integración y fomentar el respeto, a la vez que contribuyen al desarrollo de la cooperación, la igualdad y el trabajo en equipo. Ya que a través del ejercicio y movimiento físico bien orientado, se logra una mejor calidad de vida y una mejor formación.',
          imageUrl: 'https://i.imgur.com/4DVidIm.jpg',
          categoryId: 3,
          Type: 'DESARROLLO PERSONAL',
          createdAt: '2022-03-28 00:13:04',
          updatedAt: '2022-04-21 00:00:15',
        },
        {
          name: 'Continuamos fomentando la práctica de actividades acuáticas',
          content:
            'Junto al Municipio se llevaran a cabo actividades acuáticas para los niños y niñas de la comunidad. Contamos con un equipo de profesionales voluntarios que se encargarán de la coordinación de las actividades acuáticas, así como de la organización de los talleres al aire libre.',
          imageUrl: 'https://i.imgur.com/39P0Dbh.jpg',
          categoryId: 5,
          Type: 'DESARROLLO PERSONAL',
          createdAt: '2022-04-04 07:14:26',
          updatedAt: '2022-04-03 02:58:24',
        },
        {
          name: 'Ampliamos el apoyo escolar para chicos de nivel secundario',
          content:
            'Desde ahora contamos con el apoyo escolar para los chicos de nivel secundario. Trabajando en conjunto con las instituciones escolares y profesionales tratantes en todo el proceso, es decir: en la elaboración, puesta en marcha y seguimiento de estrategias y/o proyectos de integración escolar de acuerdo a las necesidades y posibilidades del adolecente, su familia y de la escuela a la que asiste.',
          imageUrl: 'https://i.imgur.com/NYbgaKv.jpg',
          categoryId: 3,
          Type: 'APOYO ESCOLAR',
          createdAt: '2022-04-06 09:25:40',
          updatedAt: '2022-03-08 08:10:07',
        },
        {
          name: 'Nuevo taller de expresión corporal',
          content:
            'El taller de expresión corporal es una actividad que se lleva a cabo en diferentes espacios de nuestra organización, para que los chicos puedan practicar la expresión corporal y la coordinación de la actividad física.',
          imageUrl: 'https://i.imgur.com/d6ncT0M.jpg',
          categoryId: 3,
          Type: 'APRENDIZAJE',
          createdAt: '2022-04-12 06:22:25',
          updatedAt: '2022-03-21 09:21:28',
        },
        {
          name: 'Festejamos el día de la niñes',
          content:
            'Todos los años se lleva a cabo el festejo especial por el día de la niñes. Se realizan actividades lúdicas, con la participación de una obra teatral representada por nuestros voluntarios y padres de la comunidad.',
          imageUrl: 'https://i.imgur.com/BokKmTK.jpg',
          categoryId: 2,
          Type: 'DESARROLLO PERSONAL',
          createdAt: '2022-04-15 05:12:11',
          updatedAt: '2022-04-05 15:13:59',
        },
        {
          name: 'Seguimos sumando voluntarios de la comunidad',
          content:
            'Formamos un equipo importante de gente con el objetivo de colaborar en el desarrollo de los chicos desde las distintas áreas. Son muchos los frentes en los que se puede hacer un gran aporte. Las ganas de formar parte de la construcción del futuro de cada uno de los chicos y la sociedad en general es lo que nos mueve a involucrarnos. Siempre tenemos las puertas abiertas para ser más.',
          imageUrl: 'https://i.imgur.com/86p6pdV.jpg',
          categoryId: 3,
          Type: 'VOLUNTARIADO',
          createdAt: '2022-04-15 03:49:43',
          updatedAt: '2022-03-13 10:58:49',
        },
        {
          name: 'Taller de Arte y Cultura, para niños de nivel inicial',
          content:
            'A través del uso de elementos convencionales, los chicos pueden aprender a dibujar, pintar, escribir, leer y escuchar. Se trabaja también el uso de materiales reciclables.',
          imageUrl: 'https://i.imgur.com/V5psbZL.jpg',
          categoryId: 3,
          Type: 'DESARROLLO PERSONAL',
          createdAt: '2021-04-17 09:07:55',
          updatedAt: '2022-03-12 20:44:43',
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
