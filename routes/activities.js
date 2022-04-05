const express = require("express");
const router = express.Router();
const newsControllers = require("../controllers/activities.controllers.js")

router.post('/activities', newsControllers.createActivitie)

module.exports = router;