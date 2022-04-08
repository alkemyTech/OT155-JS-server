const express = require('express');
const { getContacts } = require('../controllers/contacts.controller');
const router = express.Router();
const { validateJWT } = require("../Middlewares/validateJWT");

router.get("/", validateJWT, getContacts);

module.exports = router;