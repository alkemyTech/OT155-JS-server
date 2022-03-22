const express = require("express");
const { getOrganizations } = require("../controllers/organizations.controller");
const router = express.Router();

router.get("/:id/public", getOrganizations);

module.exports = router;