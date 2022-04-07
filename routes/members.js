const router = require("express").Router();
const { getAllMembers } = require("../controllers/member.controller");
const { createMembers } = require("../controllers/member.controller");
const validateMembers = require("../Middlewares/validateMembers");

router.get("/", getAllMembers);
router.post("/", validateMembers, createMembers);

module.exports = router;
