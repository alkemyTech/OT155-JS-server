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
  createMembers: async (req, res) => {
    const { name, imageUrl } = req.body;
    const validateName = typeof name;
    if (validateName !== "string") {
      const errorResponse = res.status(400).json({
        message: "(!) You can only send text in the input name",
      });
      return errorResponse;
    } else {
      try {
        const newMember = await Members.create({ name, imageUrl });
        const successfullResponse = res.status(200).json({
          status: "success",
          value: true,
          newMember: newMember,
        });
        return successfullResponse;
      } catch (error) {
        const errorResponse = res.status(400).json({
          message: "(!) Something has gone wrong.",
        });
        return errorResponse;
      }
    }
  },
};

module.exports = controller;
