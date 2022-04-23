const Slide = require('../models').Slide;

const getSlide = async (req, res) => {
  try {
    const slide = await Slide.findAll();

    if (slide) {
      return res.json(slide);
    }
    res.status(404).json({
      message: 'There is no slide',
    });
  } catch {
    res.status(500).json({
      message: 'Something is wrong, talk to the administrator',
    });
  }
};

const putSlide = async (req, res) => {
  const { id } = req.params;
  try {
    const slide = await Slide.findByPk(id);
    const { body } = req;

    if (slide) {
      await slide.update(body);

      return res.json(slide);
    }
    res.status(404).json({
      message: `There is no slide with the id: ${id}`,
    });
  } catch {
    res.status(500).json({
      message: 'Something is wrong, talk to the administrator',
    });
  }
};

module.exports = {
  getSlide,
  putSlide,
};
