const router = require("express").Router();
const { getAllMembers } = require("../controllers/member.controller");
const { updateMembers } = require("../controllers/member.controller");

router.get("/", getAllMembers);
router.put("/:id", updateMembers);

module.exports = router;
