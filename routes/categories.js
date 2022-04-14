const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller")
const { check } = require('express-validator');
const { validateFields } = require('../Middlewares/validateFields');

router.delete("/delete/:id", categoriesController.deleteCategory)
router.post("/",
[
    check('name', 'Name is required').not().isEmpty().trim().contains(''),
    check('name', 'The name must be a string').isString(),
    validateFields
], categoriesController.postCategory)

module.exports = router