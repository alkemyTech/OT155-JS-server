const express = require("express");
const { getOrganizations, putOrganizations } = require("../controllers/organizations.controller");
const router = express.Router();
const { validateJWT } = require('../Middlewares/validateJWT')

router.get("/:id/public", getOrganizations);
router.put("/:id", validateJWT, putOrganizations);

module.exports = router;