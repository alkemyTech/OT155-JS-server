const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller")

router.get("/", categoriesController.getAllCategories)
router.delete("/delete/:id", categoriesController.deleteCategory)
// router.post("/", categoriesController.postCategory)

module.exports = router