const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      msg: 'There is no token in the request',
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(401).json({
        msg: 'Invalid token - user does not exist in DB',
      });
    }
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Invalid token',
    });
  }
};

module.exports = {
  validateJWT,
};
