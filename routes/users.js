const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")
const {authRole} = require("../auth/authRole")

/* GET users listing. */
router.get('/',authRole,userController.getUser)


router.post("/login", userController.login)
router.post("/register", userController.register)

module.exports = router;
