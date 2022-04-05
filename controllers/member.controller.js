const Members = require("../models").Members;

const controller = {
  getAllMembers: async (req, res) => {
    try {
      const members = await Members.findAll();
      res.status(200).json(members);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Internal server error",
      });
    }
  },
};

module.exports = controller;
