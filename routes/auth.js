const express = require('express')
const router = express.Router();
const {getCurrentUser} = require('../controllers/auth.controller')

const { validateJWT } = require('../Middlewares/validateJWT')

router.get("/me", validateJWT, getCurrentUser);

module.exports = router