const db = require("../models");

const testimonials = {
  createTestimonial: async (req, res) => {
    const { name, image, content } = req.body;
    try {
      await db.Testimonials.create({
        name,
        image,
        content,
      }).then(function (data) {
        return res.status(200).json({
          status: "Success",
          testimonial: data,
        });
      });
    } catch (error) {
      res.status(400).json({
        message: "(!) Something has gone wrong. Check the entries",
      });
    }
  },
};

module.exports = testimonials;
