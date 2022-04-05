const express = require("express");
const router = express.Router();
const newsControllers = require("../controllers/activities.controllers.js")

router.post('/activities', newsControllers.createActivitie)
router.put('/update-activity', newsControllers.updateActivity)

module.exports = router;