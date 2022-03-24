const validator = require("validator");
const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
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

  register: async (req, res) => {
    const params = req.body;

    try {
      const validateFirstName = validator.isEmpty(params.firstName);
      const validateLastName = validator.isEmpty(params.lastName);
      const validateEmail = validator.isEmpty(params.email);
      const validatePassword = validator.isEmpty(params.password);

      if (
        validateFirstName ||
        validateLastName ||
        validateEmail ||
        validatePassword
      ) {
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

      if (user !== null) {
        const alreadyExistsResponse = res.status(200).json({
          message: "Already exists an user with that email.",
          value: false,
        });
        return alreadyExistsResponse;
      }

      const id = uuidv4();
      const encryptedPassword = bcrypt.hashSync(params.password, 10);

      const token = jwt.sign(
        { id: id, email: params.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      const date = new Date();
      const newUser = await User.create({
        id: id,
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        password: encryptedPassword,
        image: null,
        roleId: 1,
        createdAt: date,
        updatedAt: date,
      });
      const successfullResponse = res.status(200).json({
        status: "success",
        value: true,
        user: newUser,
        jwt: token,
      });
      return successfullResponse;
    } catch (err) {
      const errorResponse = res.status(500).json({
        message: "(!) Something has gone wrong. Check the entries",
      });
      return errorResponse;
    }
  },
};

module.exports = controller;
