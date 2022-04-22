const express = require("express");
const router = express.Router();
const { getSlide, putSlide } = require("../controllers/slide.controller");
const { validateJWT } = require('../Middlewares/validateJWT')

router.get("/", getSlide);
router.put("/:id", validateJWT, putSlide);

module.exports = router;