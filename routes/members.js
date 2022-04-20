const router = require("express").Router();
const { createMembers, getAllMembers, deleteMember } = require("../controllers/member.controller");
const {validateJWT} = require("../Middlewares/validateJWT");
const {authRole} = require("../auth/authRole");
const validateMembers = require("../Middlewares/validateMembers");

router.get("/", getAllMembers);
router.delete("/delete", validateJWT, authRole, deleteMember);
router.post("/", validateMembers, createMembers);

module.exports = router;