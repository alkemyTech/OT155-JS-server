const router = require("express").Router();
const { getAllMembers, deleteMember } = require("../controllers/member.controller");

router.get("/", getAllMembers);
router.delete("/delete", deleteMember)

module.exports = router;
