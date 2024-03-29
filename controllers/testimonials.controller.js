const Testimonials = require("../models").Testimonials;

const testimonialsMethods = {
  getTestimonial: async (req, res) => {
    try {
      const testimonial = await Testimonials.findByPk(req.params.id);
      if(!testimonial){
        return res.status(404).json({
          ok: false,
          message: '(!) Activity does not exist',
        });
        }
      return res.json({
        status: 'success',
        value: true,
        new: testimonial,
      });
    } catch {
      return res.status(500).json({ message: '(!) Something has gone wrong' });
    }
  },
  getTestimonials: async (req, res) => {
    try {
      let testimonials = await Testimonials.findAll({});
  
      res.json({ testimonials });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        message: '(!) Something has gone wrong',
        error,
      });
    }
  },
  createTestimonial: async (req, res) => {
    const { name, image, content } = req.body;
    try {
      const newTestimonial = await Testimonials.create({
        name,
        image,
        content,
      });
      const successfullResponse = res.status(200).json({
        status: "success",
        value: true,
        testimonial: newTestimonial,
      });
      return successfullResponse;
    } catch (error) {
      const errorResponse = res.status(400).json({
        message: "(!) Testimony was not saved",
      });
      return errorResponse;
    }
  },
  deleteTestimonial: async (req, res) => {
    const { id } = req.params;
    const testimonialExist = await Testimonials.findOne({
      where: { id },
    });
    if (testimonialExist) {
      await Testimonials.destroy({
        where: {
          id,
        },
      });
      const successfullResponse = res.status(200).json({
        status: "success",
        value: true,
        Message: `Testimonial ${testimonialExist.name} has been deleted`,
      });
      return successfullResponse
    } else {
      const errorResponse = res.status(400).json({
        message:
          "(!) There are not Testimonials registered with the params sent",
      });
      return errorResponse;
    }
  },
  updateTestimonial: async (req, res) => {
    const { id } = req.params;
    const { name, image, content } = req.body;
    const testimonialExist = await Testimonials.findOne({
      where: { id },
    });
    if (testimonialExist) {
      const updateTestimonial = {
        name,
        image,
        content,
      };
      await Testimonials.update(updateTestimonial, {
        where: {
          id,
        },
      });
      const successfullResponse = res.status(200).json({
        status: "success",
        data: updateTestimonial,
        value: true,
        Message: `Testimonial ${testimonialExist.id} has been updated`,
      });
      return successfullResponse
    } else {
      const errorResponse = res.status(400).json({
        message:
          "(!) There are not Testimonials registered with the params sent",
      });
      return errorResponse;
    }
  },
};

module.exports = testimonialsMethods;
