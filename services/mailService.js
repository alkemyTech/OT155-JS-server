const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
  const msg = {
    to,
    from: "francomurabito@outlook.com", // Pongo mi email porque hay que verificarlo para que funcione
    subject,
    text,
    html: `<strong>${text}</strong>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.log("aca");
      console.error(error);
    });
};

module.exports = sendEmail;
