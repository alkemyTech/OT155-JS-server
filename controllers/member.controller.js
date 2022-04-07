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
  updateMembers: async (req, res) => {
    const { id } = req.params;
    const { name, imageUrl } = req.body;
    const membersExist = await Members.findOne({
      where: { id },
    });
    if (!membersExist) {
      const errorResponse = res.status(400).json({
        message: "(!) There are not Members registered with the params sent",
      });
      return errorResponse;
    } else {
      const updateMembers = {
        name,
        imageUrl,
      };
      try {
        await Members.update(updateMembers, {
          where: { id },
        });
        const successfullResponse = res.status(200).json({
          status: "success",
          data: updateMembers,
          value: true,
          Message: `Member ${membersExist.id} has been updated`,
        });
      } catch (error) {
        const errorResponse = res.status(400).json({
          message: "(!) Internal server error",
        });
        return errorResponse;
      }
    }
  },
};

module.exports = controller;
