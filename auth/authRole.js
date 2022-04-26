const authRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({
      error: "you need a token to validate the role",
    });
  }
  if (req.user.roleId !== 1) {
    return res.status(401).json({
      error: "you don't have the required permissions",
    });
  }
  next();
};

module.exports = { authRole };
