const express = require('express');
const router = express.Router();
const { createNew, getNews, getNew } = require('../controllers/entries.controller.js');

router.get('/news', getNews);
router.get('/news/:Id', getNew);

router.post('/news/create-new', createNew);
module.exports = router;
