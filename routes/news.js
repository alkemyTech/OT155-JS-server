const express = require("express");
const router = express.Router();
const newsController = require("../controllers/news.controller.js")
/* GET news listing. */
router.get("/", newsController.getNews);


router.post("/create-new", newsController.createNew)
module.exports = router;