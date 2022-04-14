const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller')

const { validateJWT } = require('../Middlewares/validateJWT')

module.exports = router