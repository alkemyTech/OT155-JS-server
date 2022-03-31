const express = require("express");
const router = express.Router();
const testimonialsController = require("../controllers/testimonials.controller");
const validateTestimonial = require("../Middlewares/validateTestimonials");

router.post("/", validateTestimonial, testimonialsController.createTestimonial);

module.exports = router;
