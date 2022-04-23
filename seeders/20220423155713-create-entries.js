"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Entries",
      [
        {
          name: "proin eu mi nulla ac enim in",
          content:
            "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          imageUrl: "https://i.imgur.com/BokKmTK.jpg",
          categoryId: 1,
          Type: "et ultrices",
          createdAt: "2022-04-11 05:42:14",
          updatedAt: "2022-03-23 09:59:10",
        },
        {
          name: "non pretium quis lectus suspendisse potenti",
          content:
            "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          imageUrl: "https://i.imgur.com/d6ncT0M.jpg",
          categoryId: 3,
          Type: "ac nulla",
          createdAt: "2022-04-16 00:29:45",
          updatedAt: "2022-03-06 15:35:14",
        },
        {
          name: "sem mauris laoreet ut",
          content:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          imageUrl: "https://i.imgur.com/BokKmTK.jpg",
          categoryId: 2,
          Type: "ipsum",
          createdAt: "2022-03-28 00:13:04",
          updatedAt: "2022-04-21 00:00:15",
        },
        {
          name: "quis orci nullam molestie nibh",
          content:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          imageUrl: "https://i.imgur.com/BokKmTK.jpg",
          categoryId: 2,
          Type: "purus eu",
          createdAt: "2022-04-04 07:14:26",
          updatedAt: "2022-04-03 02:58:24",
        },
        {
          name: "felis sed lacus morbi sem mauris laoreet",
          content:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          imageUrl: "https://i.imgur.com/4DVidIm.jpg",
          categoryId: 1,
          Type: "platea dictumst",
          createdAt: "2022-03-25 09:25:40",
          updatedAt: "2022-03-08 08:10:07",
        },
        {
          name: "rhoncus aliquam lacus morbi",
          content:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          imageUrl: "https://i.imgur.com/d6ncT0M.jpg",
          categoryId: 3,
          Type: "mauris",
          createdAt: "2022-04-01 06:22:25",
          updatedAt: "2022-03-21 09:21:28",
        },
        {
          name: "ipsum primis in faucibus orci luctus et",
          content:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          imageUrl: "https://i.imgur.com/d6ncT0M.jpg",
          categoryId: 1,
          Type: "nulla",
          createdAt: "2022-03-16 09:27:29",
          updatedAt: "2022-03-13 13:28:10",
        },
        {
          name: "felis sed lacus morbi",
          content:
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          imageUrl: "https://i.imgur.com/W7ICIPA.jpg",
          categoryId: 2,
          Type: "orci",
          createdAt: "2022-04-22 05:12:11",
          updatedAt: "2022-04-05 15:13:59",
        },
        {
          name: "dis parturient montes nascetur ridiculus mus vivamus",
          content:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          imageUrl: "https://i.imgur.com/B26MMII.jpg",
          categoryId: 3,
          Type: "placerat praesent",
          createdAt: "2022-03-02 17:09:49",
          updatedAt: "2022-03-02 00:59:00",
        },
        {
          name: "lacus morbi quis tortor id nulla ultrices",
          content:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          imageUrl: "https://i.imgur.com/V5psbZL.jpg",
          categoryId: 3,
          Type: "eget",
          createdAt: "2022-03-10 03:49:43",
          updatedAt: "2022-03-13 10:58:49",
        },
        {
          name: "erat nulla tempus",
          content:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          imageUrl: "https://i.imgur.com/V5psbZL.jpg",
          categoryId: 4,
          Type: "eleifend pede",
          createdAt: "2022-03-22 18:26:33",
          updatedAt: "2022-03-03 03:46:28",
        },
        {
          name: "libero convallis eget eleifend luctus ultricies eu",
          content:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          imageUrl: "https://i.imgur.com/x8yXdWA.jpg",
          categoryId: 2,
          Type: "semper",
          createdAt: "2022-04-15 18:25:14",
          updatedAt: "2022-04-07 05:17:26",
        },
        {
          name: "sapien placerat ante nulla justo aliquam quis",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          imageUrl: "https://i.imgur.com/4DVidIm.jpg",
          categoryId: 3,
          Type: "orci mauris",
          createdAt: "2022-04-18 08:59:06",
          updatedAt: "2022-03-16 16:13:46",
        },
        {
          name: "pulvinar nulla pede ullamcorper augue a",
          content:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          imageUrl: "https://i.imgur.com/39P0Dbh.jpg",
          categoryId: 5,
          Type: "nulla pede",
          createdAt: "2022-03-29 19:23:07",
          updatedAt: "2022-04-14 20:25:49",
        },
        {
          name: "maecenas tincidunt lacus at velit vivamus",
          content:
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          imageUrl: "https://i.imgur.com/NYbgaKv.jpg",
          categoryId: 3,
          Type: "ac neque",
          createdAt: "2022-03-08 08:26:14",
          updatedAt: "2022-03-19 13:21:40",
        },
        {
          name: "posuere nonummy integer non velit donec diam",
          content:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          imageUrl: "https://i.imgur.com/39P0Dbh.jpg",
          categoryId: 5,
          Type: "tellus in",
          createdAt: "2022-03-22 16:19:31",
          updatedAt: "2022-03-17 18:45:48",
        },
        {
          name: "ipsum primis in faucibus orci",
          content:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          imageUrl: "https://i.imgur.com/39P0Dbh.jpg",
          categoryId: 2,
          Type: "risus auctor",
          createdAt: "2022-04-14 16:40:10",
          updatedAt: "2022-03-04 03:17:36",
        },
        {
          name: "sapien sapien non mi integer ac neque",
          content:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          imageUrl: "https://i.imgur.com/d6ncT0M.jpg",
          categoryId: 4,
          Type: "morbi",
          createdAt: "2022-03-12 11:46:33",
          updatedAt: "2022-03-12 19:23:46",
        },
        {
          name: "in hac habitasse platea dictumst maecenas",
          content:
            "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://i.imgur.com/4DVidIm.jpg",
          categoryId: 3,
          Type: "enim",
          createdAt: "2022-04-04 20:06:30",
          updatedAt: "2022-04-15 00:12:25",
        },
        {
          name: "nulla ut erat",
          content:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          imageUrl: "https://i.imgur.com/B26MMII.jpg",
          categoryId: 3,
          Type: "aliquet at",
          createdAt: "2022-03-22 19:23:33",
          updatedAt: "2022-04-03 10:28:50",
        },
        {
          name: "ridiculus mus vivamus vestibulum sagittis sapien",
          content:
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          imageUrl: "https://i.imgur.com/NYbgaKv.jpg",
          categoryId: 3,
          Type: "convallis",
          createdAt: "2022-03-10 16:01:09",
          updatedAt: "2022-03-15 17:28:31",
        },
        {
          name: "pede ac diam cras pellentesque volutpat dui",
          content:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          imageUrl: "https://i.imgur.com/B26MMII.jpg",
          categoryId: 4,
          Type: "sit",
          createdAt: "2022-04-13 18:48:47",
          updatedAt: "2022-03-23 16:02:28",
        },
        {
          name: "tristique fusce congue diam id ornare imperdiet",
          content:
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          imageUrl: "https://i.imgur.com/W7ICIPA.jpg",
          categoryId: 4,
          Type: "dui maecenas",
          createdAt: "2022-03-27 00:32:56",
          updatedAt: "2022-03-23 01:52:12",
        },
        {
          name: "consequat dui nec nisi volutpat",
          content:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          imageUrl: "https://i.imgur.com/NYbgaKv.jpg",
          categoryId: 4,
          Type: "pulvinar",
          createdAt: "2022-03-08 09:07:55",
          updatedAt: "2022-03-12 20:44:43",
        },
        {
          name: "duis faucibus accumsan odio curabitur convallis",
          content:
            "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          imageUrl: "https://i.imgur.com/W7ICIPA.jpg",
          categoryId: 5,
          Type: "vulputate",
          createdAt: "2022-04-03 04:06:22",
          updatedAt: "2022-04-19 08:40:13",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Entries", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
