"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Contacts",
      [
        {
          name: "Kali Pochet",
          email: "kpochet0@lulu.com",
          phone: "3779265705",
          message:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          createdAt: "2022-03-02 02:49:38",
          updatedAt: "2022-03-18 07:57:21",
        },
        {
          name: "Tommi Pulsford",
          email: "tpulsford1@hp.com",
          phone: "3696214949",
          message:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          createdAt: "2022-04-09 12:12:48",
          updatedAt: "2022-03-12 09:26:40",
        },
        {
          name: "Kiah McArley",
          email: "kmcarley2@list-manage.com",
          phone: null,
          message:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
          createdAt: "2022-03-19 20:13:31",
          updatedAt: "2022-04-12 15:31:52",
        },
        {
          name: "Jo-ann Frantzeni",
          email: "jfrantzeni3@nydailynews.com",
          phone: null,
          message:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          createdAt: "2022-03-28 12:16:33",
          updatedAt: "2022-03-15 13:15:11",
        },
        {
          name: "Heriberto Pyner",
          email: "hpyner4@cbslocal.com",
          phone: "9452046818",
          message:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          createdAt: "2022-03-26 09:05:12",
          updatedAt: "2022-03-31 11:43:26",
        },
        {
          name: "Justinn Trencher",
          email: "jtrencher5@cnn.com",
          phone: null,
          message:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          createdAt: "2022-04-17 13:32:01",
          updatedAt: "2022-03-27 15:58:50",
        },
        {
          name: "Agatha Milsted",
          email: "amilsted6@thetimes.co.uk",
          phone: "6387272987",
          message:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          createdAt: "2022-03-09 03:13:02",
          updatedAt: "2022-03-28 08:58:16",
        },
        {
          name: "Rina Petrovsky",
          email: "rpetrovsky7@is.gd",
          phone: null,
          message:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          createdAt: "2022-04-04 02:00:08",
          updatedAt: "2022-03-28 19:18:00",
        },
        {
          name: "Moina Ingley",
          email: "mingley8@hexun.com",
          phone: null,
          message:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          createdAt: "2022-03-16 21:57:02",
          updatedAt: "2022-04-07 05:31:09",
        },
        {
          name: "Tyler Palmar",
          email: "tpalmar9@issuu.com",
          phone: "1644350921",
          message:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          createdAt: "2022-03-01 07:16:49",
          updatedAt: "2022-03-04 20:40:07",
        },
        {
          name: "Audy Thiese",
          email: "athiesea@eventbrite.com",
          phone: null,
          message:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          createdAt: "2022-03-18 13:39:20",
          updatedAt: "2022-04-04 01:33:21",
        },
        {
          name: "Maryrose Basso",
          email: "mbassob@mapquest.com",
          phone: null,
          message:
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          createdAt: "2022-04-01 16:21:34",
          updatedAt: "2022-03-13 16:47:56",
        },
        {
          name: "Milo Corrin",
          email: "mcorrinc@webnode.com",
          phone: null,
          message:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          createdAt: "2022-04-15 03:58:05",
          updatedAt: "2022-04-12 12:36:16",
        },
        {
          name: "Maridel Marlen",
          email: "mmarlend@goodreads.com",
          phone: null,
          message:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          createdAt: "2022-03-21 19:43:34",
          updatedAt: "2022-04-17 00:40:23",
        },
        {
          name: "Dix Bertenshaw",
          email: "dbertenshawe@woothemes.com",
          phone: "3195105594",
          message:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          createdAt: "2022-03-16 18:23:32",
          updatedAt: "2022-03-16 23:48:39",
        },
        {
          name: "Michaelina Haslock",
          email: "mhaslockf@scientificamerican.com",
          phone: null,
          message:
            "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          createdAt: "2022-03-26 23:15:33",
          updatedAt: "2022-03-14 23:06:04",
        },
        {
          name: "Harmonie Itzkovwich",
          email: "hitzkovwichg@is.gd",
          phone: null,
          message:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          createdAt: "2022-04-09 23:33:54",
          updatedAt: "2022-03-13 07:11:19",
        },
        {
          name: "Fallon Gooderidge",
          email: "fgooderidgeh@mozilla.org",
          phone: null,
          message:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          createdAt: "2022-04-03 20:59:24",
          updatedAt: "2022-04-17 08:31:46",
        },
        {
          name: "Pincas Reedie",
          email: "preediei@nydailynews.com",
          phone: null,
          message:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          createdAt: "2022-04-01 11:00:27",
          updatedAt: "2022-04-08 07:33:32",
        },
        {
          name: "Orville Sadry",
          email: "osadryj@dropbox.com",
          phone: "3335277322",
          message:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          createdAt: "2022-03-02 13:38:46",
          updatedAt: "2022-04-10 13:31:02",
        },
        {
          name: "Carson McKibben",
          email: "cmckibbenk@theglobeandmail.com",
          phone: "2135716174",
          message:
            "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          createdAt: "2022-03-19 14:04:52",
          updatedAt: "2022-03-10 00:52:11",
        },
        {
          name: "Bobette Beckingham",
          email: "bbeckinghaml@quantcast.com",
          phone: null,
          message:
            "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          createdAt: "2022-03-24 07:25:29",
          updatedAt: "2022-03-29 02:42:57",
        },
        {
          name: "Geordie Rochell",
          email: "grochellm@altervista.org",
          phone: null,
          message:
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          createdAt: "2022-03-08 04:54:57",
          updatedAt: "2022-03-10 18:33:13",
        },
        {
          name: "Ole MacBean",
          email: "omacbeann@tmall.com",
          phone: null,
          message:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          createdAt: "2022-03-11 19:12:42",
          updatedAt: "2022-03-15 03:58:27",
        },
        {
          name: "Rianon Timms",
          email: "rtimmso@youtube.com",
          phone: null,
          message:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          createdAt: "2022-04-12 22:05:49",
          updatedAt: "2022-04-14 03:12:24",
        },
        {
          name: "Johnna Coppin",
          email: "jcoppinp@lycos.com",
          phone: "9561455257",
          message:
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          createdAt: "2022-03-11 23:46:07",
          updatedAt: "2022-04-01 06:42:46",
        },
        {
          name: "Baxter Cripwell",
          email: "bcripwellq@bing.com",
          phone: "8136289893",
          message:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          createdAt: "2022-04-18 13:45:04",
          updatedAt: "2022-04-18 11:38:57",
        },
        {
          name: "Odelinda Feldmus",
          email: "ofeldmusr@google.pl",
          phone: "6809084770",
          message:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          createdAt: "2022-03-23 08:07:43",
          updatedAt: "2022-04-02 16:52:32",
        },
        {
          name: "Fern Keuneke",
          email: "fkeunekes@cbslocal.com",
          phone: null,
          message:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          createdAt: "2022-03-30 16:19:13",
          updatedAt: "2022-04-14 08:56:56",
        },
        {
          name: "Killian Ramos",
          email: "kramost@fema.gov",
          phone: null,
          message:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          createdAt: "2022-03-10 21:31:59",
          updatedAt: "2022-03-06 19:40:15",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contacts", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
