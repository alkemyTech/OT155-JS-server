const router = require("express").Router();
const { getAllMembers, deleteMember } = require("../controllers/member.controller");
const {validateJWT} = require("../Middlewares/validateJWT")
const {authRole} = require("../auth/authRole") 

router.get("/", getAllMembers);
router.delete("/delete", validateJWT, authRole, deleteMember)

module.exports = router;
