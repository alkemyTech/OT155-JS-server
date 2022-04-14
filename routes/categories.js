const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller")


router.delete("/delete/:id", categoriesController.deleteCategory)

module.exports = router