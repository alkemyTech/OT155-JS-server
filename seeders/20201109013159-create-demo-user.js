"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					firstName: "Ulrick",
					lastName: "Lecointe",
					email: "ulecointe0@cafepress.com",
					// Important: Password not encrypted yet!
					password: "ym8nGyaf",
					roleId: 1,
					image: "https://robohash.org/natusenimrem.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Wilhelmina",
					lastName: "Sey",
					email: "wsey1@smh.com.au",
					// Important: Password not encrypted yet!
					password: "h7twf6A4",
					roleId: 1,
					image: "https://robohash.org/voluptasquisapiente.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Phillie",
					lastName: "Godard",
					email: "pgodard2@hc360.com",
					// Important: Password not encrypted yet!
					password: "5zGPJ4SA",
					roleId: 1,
					image: "https://robohash.org/omnismollitiapraesentium.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Eduino",
					lastName: "Treuge",
					email: "etreuge3@quantcast.com",
					// Important: Password not encrypted yet!
					password: "VhmweyGg",
					roleId: 1,
					image: "https://robohash.org/voluptatemharumrem.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Theda",
					lastName: "Osborne",
					email: "tosborne4@digg.com",
					// Important: Password not encrypted yet!
					password: "rQxVxngW",
					roleId: 1,
					image: "https://robohash.org/rerumestsed.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Bail",
					lastName: "Duckitt",
					email: "bduckitt5@webs.com",
					// Important: Password not encrypted yet!
					password: "jUXkdFWC",
					roleId: 1,
					image: "https://robohash.org/utautemdelectus.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Fabiano",
					lastName: "Joire",
					email: "fjoire6@hostgator.com",
					// Important: Password not encrypted yet!
					password: "DAbd6hek",
					roleId: 1,
					image: "https://robohash.org/voluptatuminciduntratione.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Elyse",
					lastName: "Moorhouse",
					email: "emoorhouse7@shinystat.com",
					// Important: Password not encrypted yet!
					password: "hFkFDJp4",
					roleId: 1,
					image: "https://robohash.org/voluptatemdoloreseligendi.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Shayne",
					lastName: "Flury",
					email: "sflury8@deviantart.com",
					// Important: Password not encrypted yet!
					password: "BFT2ft8v",
					roleId: 1,
					image: "https://robohash.org/accusantiuminet.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Alec",
					lastName: "Picknett",
					email: "apicknett9@bravesites.com",
					// Important: Password not encrypted yet!
					password: "Cr48hzcY",
					roleId: 1,
					image: "https://robohash.org/quiainrerum.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Halie",
					lastName: "Margerrison",
					email: "hmargerrisona@over-blog.com",
					// Important: Password not encrypted yet!
					password: "zPszHVs8",
					roleId: 2,
					image: "https://robohash.org/eaassumendaminus.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Matty",
					lastName: "Lodeke",
					email: "mlodekeb@shareasale.com",
					// Important: Password not encrypted yet!
					password: "8npFYWRW",
					roleId: 2,
					image: "https://robohash.org/accusantiumetsit.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Abba",
					lastName: "Durbyn",
					email: "adurbync@purevolume.com",
					// Important: Password not encrypted yet!
					password: "mf6BttAv",
					roleId: 2,
					image: "https://robohash.org/aconsequaturillum.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Thaddeus",
					lastName: "Egre",
					email: "tegred@vimeo.com",
					// Important: Password not encrypted yet!
					password: "mQypWayq",
					roleId: 2,
					image: "https://robohash.org/quaequaeratdicta.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Cornela",
					lastName: "Knappen",
					email: "cknappene@theguardian.com",
					// Important: Password not encrypted yet!
					password: "UR7xjMeY",
					roleId: 2,
					image: "https://robohash.org/suntseddolorum.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Avery",
					lastName: "Stallon",
					email: "astallonf@ca.gov",
					// Important: Password not encrypted yet!
					password: "FcfYG9qw",
					roleId: 2,
					image: "https://robohash.org/omnisdolorumfacere.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Zulema",
					lastName: "Grigoryov",
					email: "zgrigoryovg@geocities.jp",
					// Important: Password not encrypted yet!
					password: "Txcwuvud",
					roleId: 2,
					image: "https://robohash.org/deseruntetprovident.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Thor",
					lastName: "Jerrand",
					email: "tjerrandh@vistaprint.com",
					// Important: Password not encrypted yet!
					password: "6HUdTKh8",
					roleId: 2,
					image: "https://robohash.org/autetaut.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Sherry",
					lastName: "Tackley",
					email: "stackleyi@github.com",
					// Important: Password not encrypted yet!
					password: "y3Ttb8rX",
					roleId: 2,
					image: "https://robohash.org/temporibusnostrumrepudiandae.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Gertie",
					lastName: "Priddey",
					email: "gpriddeyj@nbcnews.com",
					// Important: Password not encrypted yet!
					password: "wCXckmbz",
					roleId: 2,
					image: "https://robohash.org/utautofficia.png?size=250x250&set=set1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Users", null, {
			truncate: true,
			restartIdentity: true,
		});
	},
};
