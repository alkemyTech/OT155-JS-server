const express = require("express");
const router = express.Router();
const testimonialsController = require("../controllers/testimonials.controller");
const validateProduct = require("../Middlewares/validateTestimonials");

router.post("/", validateProduct, testimonialsController.createTestimonial);

module.exports = router;
