const validator = require("validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const controller = {
  login: async (req, res) => {
    const params = req.body;

    try {
      const validateEmail = validator.isEmpty(params.email);
      const validatePassword = validator.isEmpty(params.password);

      if (validateEmail || validatePassword) {
        const missingDataResponse = res.status(200).json({
          message: "(!) Some data is missing",
          value: false,
        });
        return missingDataResponse;
      }

      const user = await User.findOne({
        where: {
          email: params.email,
        },
      });

      if (user === null) {
        const invalidEmailResponse = res.status(200).json({
          message: "There is no user registered with that email.",
          value: false,
        });
        return invalidEmailResponse;
      }

      if (params.password !== user.password) {
        const invalidPasswordResponse = res.status(200).json({
          status: "invalid password",
          value: false,
        });
        return invalidPasswordResponse;
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2d",
        }
      );

      return res.status(200).json({
        status: "success",
        value: true,
        user: user,
        jwt: token,
      });
    } catch (err) {
      const errorResponse = res.status(500).json({
        message: "(!) Something has gone wrong. Check the entries",
      });
      return errorResponse;
    }
  },
};

module.exports = controller;
