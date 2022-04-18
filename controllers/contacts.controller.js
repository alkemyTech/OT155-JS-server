const Contact = require('../models').Contacts;
const sendEmail = require("../services/mailService");

const contactsPost = async (req, res) => {
  const { name, email } = req.body;

  const contact = new Contact({ name, email });

  try {
    Contact.build(contact);
    await contact.save();

    const subject = "¡Muchas Gracias!";
    const text = "Muchas gracias por comunicarte con Somos Más, estaremos en contacto a la brevedad"
    sendEmail(email,subject,text)

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