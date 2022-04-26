'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Testimonials',
      [
        {
          name: 'Laura',
          imageUrl:"",
          content: 'Devolver a la sociedad un poco de lo mucho que recibí por haber tenido la suerte de haber nacido en una familia y contexto que favorecieron mi educación y desarrollo como persona. Considero que la educación es clave para poder lograr crecimiento y muchas y mejores posibilidades.',
        },
        {
          name: 'Andrea',
          imageUrl:"",
          content: 'Ser Voluntario es mi estilo de vida, soy Voluntario porque es una felicidad inmensa ayudar a los demás, aprender de ellos y así vivir en un mundo mejor',
        },
        {
          name: 'Carla',
          imageUrl:"",
          content: 'Siempre quise CAMBIAR EL MUNDO. Intenté, fracasé. Eso no me quitó la inquietud de hacer algo por los demás. Después descubrí que cambiar el mundo es algo tan simple como poner una sonrisa en donde no la hay. Hoy con 28 años, estoy cambiando el mundo.',
        },
        {
          name: 'Matías',
          imageUrl:"",
          content: 'Me desperto un sentimiento profundo de poder ayudar a aquellos que lo están necesitando, y después el poder encauzar esa entrega de tiempo y cariño por ese hecho de colaborar y no querer ser solidario solo en forma ocasional.',
        },
        {
          name: 'Cecicia',
          imageUrl:"",
          content: 'Creo que participar activamente es la mejor manera de generar un cambio. En 1 Minuto de Vos me gustó la idea y el concepto que hay del tiempo. Esto de poder dar un minuto e ir sumando los de todos para lograr grandes objetivos me pareció interesante.',
        },
        {
          name: 'Gastón',
          imageUrl:"",
          content: 'No hay nada más lindo que ayudar a los que más lo necesitan. Robarle una sonrisa a un niño es mostrarle que una vida mejor es posible, todos nacemos y tenemos adentro esas ganas de ayudar, somos altruistas por naturaleza.',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Testimonials', null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
