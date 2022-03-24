const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});


router.post("/login", userController.login)
router.post("/register", userController.register)

module.exports = router;
