const Organizations = require('../models').Organizations;

const getOrganizations = async (req, res) => {
  const { id } = req.params;
  const data = await Organizations.findByPk(id);

  if (data) {
    const { name, image, phone, address, welcomeText } = data;

    res.json({
      name,
      image,
      phone,
      address,
      welcomeText,
    });
  } else {
    res.status(404).json({
      msg: `There is no organizations with the id: ${id}`,
    });
  }
};

module.exports = {
  getOrganizations,
};
