const express = require("express");
const router = express.Router();
const newsControllers = require("../controllers/news.controllers.js")

router.get("/", newsControllers.getNews);
// router.get('/:newsId', newsControllers.getNew)

router.post("/create-new", newsControllers.createNew)
router.post("/updateNew", newsControllers.updateNew)
module.exports = router;

