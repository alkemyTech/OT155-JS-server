const Contact = require("../models").Contacts;
const sendEmail = require("../services/mailService");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ where: { deletedAt: null } });
    res.json({
      status: "success",
      value: true,
      contacts,
    });
  } catch (err) {
    res.status(500).json({ message: "(!) Something has gone wrong. " });
  }
};

const contactsPost = async (req, res) => {
  const { name, email, message } = req.body;
  const phone = req.body.phone || null;
  const contact = new Contact({ name, email, message, phone });

  try {
    Contact.build(contact);
    await contact.save();

    const subject = "¡Muchas Gracias!";
    const text =
      "Muchas gracias por comunicarte con Somos Más, estaremos en contacto a la brevedad";
    sendEmail(email, subject, text);

    res.json({
      status: "success",
      value: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      value: false,
    });
  }
};

module.exports = {
  getAllContacts,
  contactsPost,
};
