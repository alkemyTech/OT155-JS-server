const { body } = require("express-validator");

let validateTestimonial = [
  body("name").notEmpty().withMessage("you must include a name").bail(),
  body("coment").notEmpty().withMessage("you must include a coment").bail(),
];

module.exports = validateTestimonial;
