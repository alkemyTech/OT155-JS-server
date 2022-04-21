const Organizations = require('../models').Organizations;

const getOrganizations = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Organizations.findByPk(id);

    if (data) {
      const { name, image, phone, address, welcomeText, urlFacebook, urlLinkedin, urlInstagram } = data;

      return res.json({
        name,
        image,
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
  }catch{
    res.status(500).json({
      msg:''
    })
  }
  
};

module.exports = {
  getOrganizations,
};
