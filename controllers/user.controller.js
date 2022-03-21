const validator = require("validator");
const User  = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const controller = {
  login: (req, res) => {
    const params = req.body;
    console.log(params)

    try {
      const validate_email = validator.isEmpty(params.email);
      const validate_password = validator.isEmpty(params.password);

      if (validate_email || validate_password) {
        return res.status(200).send({
          message: "(!) Some data is missing",
          value: false,
        });
      }

      //check if the user exist

      User.findOne({
        where: {
          email: params.email,
        },
      }).then((result) => {
        if (result === null) {
          console.log("There is no user registered with that email.");
          return res.status(200).send({
            message: "There is no user registered with that email.",
            value: false,
          });
        }

        //The user exists so check the password
        console.log(params.password + "" + result.password)
        console.log(bcrypt.compareSync(params.password, result.password))
        if (!bcrypt.compareSync(params.password, result.password)) {
          //incorrect password
          console.log("Incorrect password");
          return res.status(200).send({
            status: "invalid password",
            value: false,
          });
        } else {
          //generate jwt
          const token = jwt.sign(
            { id: result.id, email: result.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2d",
            }
          );
          result.token = token;
        }
        const user = {
          id: result.id,
          name: result.name,
          surname: result.surname,
          email: result.email,
        };
        return res.status(200).send({
          status: "success",
          value: true,
          user: user,
          jwt: result.token,
        });
      })
      .catch(err=> {
          return console.log(err)
      })
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        message: "(!) Something has gone wrong. Check the entries",
      });
    }
  },
 
};

module.exports = controller;
