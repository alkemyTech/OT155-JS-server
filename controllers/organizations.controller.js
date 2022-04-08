const Organizations = require('../models').Organizations;

const getOrganizations = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Organizations.findByPk(id);

    if (data) {
      const { name, image, phone, address, welcomeText } = data;
  
      return res.json({
        name,
        image,
        phone,
        address,
        welcomeText,
      });
    } 
    res.status(404).json({
      msg: `There is no organizations with the id: ${id}`,
    });
  }catch{
    res.status(500).json({

    })
  }
  
};

module.exports = {
  getOrganizations,
};
