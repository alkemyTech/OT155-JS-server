const express = require("express");
const router = express.Router();
const newsControllers = require("../controllers/news.controllers.js")
/* GET news listing. */
router.get("/", newsControllers.getNews);

router.post('/activities', newsControllers.createActivitie)

module.exports = router;