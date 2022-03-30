const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller")


router.delete("/delete/:id", categoriesController.deleteCategorie)

module.exports = router