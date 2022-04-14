const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller')
const { validateJWT } = require('../Middlewares/validateJWT')

router.get('/me', validateJWT,authController.getCurrentUser)

module.exports = router