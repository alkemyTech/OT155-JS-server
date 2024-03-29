const express = require("express");
const {
  contactsPost,
  getAllContacts,
} = require("../controllers/contacts.controller");
const router = express.Router();
const { check } = require("express-validator");
const { validateFields } = require("../Middlewares/validateFields");
const { emailExists } = require("../helpers/dbValidators");
const { validateJWT } = require("../Middlewares/validateJWT");
const { authRole } = require("../auth/authRole");

router.get("/", validateJWT, authRole, getAllContacts);
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Name is required").not().isEmpty(),
    check("email", "The email is not valid").isEmail().normalizeEmail({
      all_lowercase: true,
    }),
    check("email").custom(emailExists),
    validateFields,
  ],
  contactsPost
);

module.exports = router;
