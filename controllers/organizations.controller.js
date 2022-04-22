const Organizations = require('../models').Organizations;

const getOrganizations = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Organizations.findByPk(id);

    if (data) {
      const {
        name,
        imageUrl,
        phone,
        address,
        welcomeText,
        urlFacebook,
        urlLinkedin,
        urlInstagram,
      } = data;

      return res.json({
        name,
        imageUrl,
        phone,
        address,
        welcomeText,
        urlFacebook,
        urlLinkedin,
        urlInstagram,
      });
    }
    res.status(404).json({
      msg: `There is no organizations with the id: ${id}`,
    });
  } catch {
    res.status(500).json({
      msg: 'Something is wrong, talk to the administrator',
    });
  }
};

const putOrganizations = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Organizations.findByPk(id);
    const { body } = req;

    if (data) {
      await data.update(body);

      return res.json(data);
    }
    res.status(404).json({
      msg: `There is no organizations with the id: ${id}`,
    });
  } catch {
    res.status(500).json({
      msg: 'Something is wrong, talk to the administrator',
    });
  }
};

module.exports = {
  getOrganizations,
  putOrganizations,
};
