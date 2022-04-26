const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authRole } = require("../auth/authRole");
const { validateJWT } = require("../Middlewares/validateJWT");

/* GET users listing. */
router.get("/", validateJWT, authRole, userController.getUser);

router.post("/login", userController.login);
router.post("/register", userController.register);

router.delete("/:id", validateJWT, userController.delete);
router.put("/:id", userController.edit);
module.exports = router;
