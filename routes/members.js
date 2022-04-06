const router = require("express").Router();
const { getAllMembers } = require("../controllers/member.controller");

router.get("/", getAllMembers);

module.exports = router;
