const db = require("../models");

const testimonials = {
  createTestimonial: async (req, res) => {
    const { name, image, content } = req.body;
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
  },
};

module.exports = testimonials;
