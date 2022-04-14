const Contacts = require('../models').Contacts;

const emailExists = async (email = '') => {
  const exitsEmail = await Contacts.findOne({
    where: {
      email,
    },
  });

  if (exitsEmail) {
    throw new Error(`There is already a user with the email ${email}`);
  }
};

module.exports = { emailExists };
