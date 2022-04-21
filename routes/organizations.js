const express = require("express");
const { getOrganizations, putOrganizations } = require("../controllers/organizations.controller");
const router = express.Router();

router.get("/:id/public", getOrganizations);
router.put("/:id", putOrganizations);

module.exports = router;