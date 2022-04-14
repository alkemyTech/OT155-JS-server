const Activities = require("../models").Activities;

const validator = require("validator");

const createActivitie = async (req, res) => {
  const { name, image, content } = req.body;

  try {
    if (validator.isEmpty(name) || validator.isEmpty(content))
      return res
        .status(401)
        .json({ message: "Name and Content fields are required" });

    const newActivities = await Activities.create({
      title: name,
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
    if (!params.id || !params.name || !params.image || !params.concept) {
      return res.status(400).json({
        ok: false,
        message: "(!) Error. Missing fields.",
      });
    }

    validate_id = validator.isEmpty(params.id);
    validate_name = validator.isEmpty(params.name);
    validate_image = validator.isEmpty(params.image);
    validate_concept = validator.isEmpty(params.concept);

    if (validate_id || validate_name || validate_image || validate_concept) {
      return res.status(400).json({
        ok: false,
        message: "(!) Error. Some fields are empty.",
      });
    }

    const activity = await Activities.findOne({where: {id: params.id}})

    if(!activity){
        return res.status(404).json({
            ok: false,
            message: "(!) Error. Activity not found.",
          });
    }

    const updateActivity = await Activities.update(
        { name: params.name, image: params.image, concept: params.concept },
        { where: { id: params.id } }
      );

    const updatedActivity = await Activities.findOne({where: {id: params.id}})
  
      return res.status(200).json({
        ok: true,
        message: "Activity updated successfully",
        updatedActivity
       
      });
    
  } catch (err) {
      console.log(err)
    return res.status(500).json({
      ok: false,
      message: "(!) Something's gone wrong. Try again.",
      error: err,
    });
  }
};

module.exports = {
  createActivitie,
  updateActivity
};
