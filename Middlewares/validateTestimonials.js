const { body } = require("express-validator");

let validateTestimonial = [
  body("name").notEmpty().withMessage("you must include a name").bail(),
  body("content").notEmpty().withMessage("you must include a content").bail(),
];

module.exports = validateTestimonial;
