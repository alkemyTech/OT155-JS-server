const validator = require("validator");
const { DataTypes } = require("sequelize")
const db = require("../models");
const User = require("../models/user")(db.sequelize, DataTypes)
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const controller = {
  getUser: async (req,res) => {
    try{
      const users = await User.findAll()
      return res.json({
        status: "success",
        value: true,
        users
      })
    }catch(error){
      return res.status(500).json({
        message: ''
      })
    }
  },
  login: async (req, res) => {
    const params = req.body;

    try {
      const validateEmail = validator.isEmpty(params.email);
      const validatePassword = validator.isEmpty(params.password);

      if (validateEmail || validatePassword) {
        const missingDataResponse = res.status(400).json({
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
        const invalidEmailResponse = res.status(404).json({
          message: "There is no user registered with that email.",
          value: false,
        });
        return invalidEmailResponse;
      }

      if (!bcrypt.compareSync(params.password, user.password)) {
        const invalidPasswordResponse = res.status(400).json({
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
        const missingDataResponse = res.status(400).json({
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
        const alreadyExistsResponse = res.status(400).json({
          message: "Already exists an user with that email.",
          value: false,
        });
        return alreadyExistsResponse;
      }

      const encryptedPassword = bcrypt.hashSync(params.password, 10);

      const newUser = await User.create({
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        password: encryptedPassword,
        image: null,
        roleId: 1,
      });
      const token = jwt.sign(
        { id: newUser.id, email: params.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
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
  
  delete: async(req,res) => {
    const { id } = req.params;
    const user = await User.findByPk(id)
    try{
      if(user){
        await user.destroy({
          where: {
            id: id
          }
        })
      } else {
        res.status(404).json({
          msg: "No user with that id"
        })
      }
    }catch(error){
        res.status(500).json({
          msg: "server error"
        })
    }
  },

  edit: async(req,res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    
    const {firstName, lastName, email, roleId} = req.body;

    console.log("el rol",roleId)
    
    const token = jwt.sign({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      roleId: roleId
    }, process.env.TOKEN_KEY, {
      expiresIn: "2h"
    })
    
    try{
      if(user){
        const updateUserInfo = await user.update({
          firstName,
          lastName,
          email,
          roleId
        }, {
          where: {
            id : id
          }
        })

        const newUserData = res.status(200).json({
          status: "success",
          value: true,
          user: updateUserInfo,
          jwt: token,
        });

        return newUserData;
      } else {
        res.status(404).json({
          msg: "user not found",
        });
      }
    }catch(error){
      console.log(error)
      res.status(500).json({
        msg: "Server error"
      })
    }
  }
};

module.exports = controller;
