const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller")
const { check } = require('express-validator');
const { validateFields } = require('../Middlewares/validateFields');
const {validateJWT} = require("../Middlewares/validateJWT")
const {authRole} = require("../auth/authRole")

router.get("/", categoriesController.getAllCategories)

router.delete("/delete/:id", categoriesController.deleteCategory)
router.post("/",
[
    check('name', 'Name is required').not().isEmpty().trim(),
    check('name', 'the name cannot be an empty field').trim().contains(''),
    check('name', 'The name must be a string').isString(),
    check('description', 'description is required').not().isEmpty().trim(),
    check('description', 'the description cannot be an empty field').trim().contains(''),
    validateFields
], categoriesController.postCategory)

router.put("/:id", authRole, validateJWT, categoriesController.updateCategory )

module.exports = router
