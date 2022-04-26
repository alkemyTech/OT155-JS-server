const Activities = require("../models").Activities;

const validator = require("validator");

const getAllActivities = async (req, res) => {
  try {
    const activities = await Activities.findAll();
    res.json({
      status: "success",
      value: true,
      activities,
    });
  } catch (err) {
    res.status(500).json({ message: "(!) Something has gone wrong. " });
  }
};

const getActivity = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await Activities.findOne({ where: { id } });

    if (!activity) {
      return res.status(404).json({
        ok: false,
        message: "(!) Error. Activity not found.",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Activity found successfully",
      activity,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      message: "(!) Something's gone wrong. Try again.",
      error: err,
    });
  }
};

const createActivitie = async (req, res) => {
  const { name, image, content } = req.body;

  try {
    if (validator.isEmpty(name) || validator.isEmpty(content))
      return res
        .status(401)
        .json({ message: "Name and Content fields are required" });

    const newActivities = await Activities.create({
      name,
      image,
      content,
    });
    res.json({
      status: "success",
      value: true,
      new: newActivities,
    });
  } catch {
    res.status(500).json({ message: "(!) Something has gone wrong. " });
  }
};

const updateActivity = async (req, res) => {
  const params = req.body;

  try {
    if (!params.id || !params.name || !params.content) {
      return res.status(400).json({
        ok: false,
        message: "(!) Error. Missing fields.",
      });
    }

    validate_id = validator.isEmpty(params.id);
    validate_name = validator.isEmpty(params.name);
    // validate_image = validator.isEmpty(params.image);
    validate_content = validator.isEmpty(params.content);

    if (validate_id || validate_name || validate_content) {
      return res.status(400).json({
        ok: false,
        message: "(!) Error. Some fields are empty.",
      });
    }

    const activity = await Activities.findOne({ where: { id: params.id } });

    if (!activity) {
      return res.status(404).json({
        ok: false,
        message: "(!) Error. Activity not found.",
      });
    }
    await Activities.update(
      { name: params.name, image: params.image, content: params.content },
      { where: { id: params.id } }
    );

    const updatedActivity = await Activities.findOne({
      where: { id: params.id },
    });

    return res.status(200).json({
      ok: true,
      message: "Activity updated successfully",
      updatedActivity,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      message: "(!) Something's gone wrong. Try again.",
      error: err,
    });
  }
};

const deleteActivity = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await Activities.findOne({ where: { id } });

    if (!activity) {
      return res.status(404).json({
        ok: false,
        message: "(!) Error. Activity not found.",
      });
    }

    await Activities.destroy({ where: { id } });

    return res.status(204).json({
      ok: true,
      message: "Activity deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      message: "(!) Something's gone wrong. Try again.",
      error: err,
    });
  }
};

module.exports = {
  getAllActivities,
  getActivity,
  createActivitie,
  updateActivity,
  deleteActivity,
};
