const { DataTypes } = require("sequelize");
const db = require("../models");
const Testimonials = require("../models/testimonials")(db.sequelize, DataTypes);

const testimonialsMethods = {
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
