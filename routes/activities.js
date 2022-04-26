const express = require("express");
const router = express.Router();
const newsControllers = require("../controllers/activities.controllers.js");
const { validateJWT } = require("../Middlewares/validateJWT");

router.get("/", newsControllers.getAllActivities);
router.get("/:id", newsControllers.getActivity);
router.post("/", validateJWT, newsControllers.createActivitie);
router.put("/", validateJWT, newsControllers.updateActivity);
router.delete("/:id", validateJWT, newsControllers.deleteActivity);

module.exports = router;
