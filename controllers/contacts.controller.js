const Contact = require('../models').Contacts;

const contactsPost = async (req, res) => {
  const { name, email } = req.body;

  const contact = new Contact({ name, email });

  try {
    Contact.build(contact);
    await contact.save();
    res.json({
      status: 'success',
      value: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      value: false,
    });
  }
};

module.exports = {
  contactsPost
};