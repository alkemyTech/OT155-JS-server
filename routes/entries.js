const express = require('express');
const router = express.Router();
const { createNew, getNews, getNew,deleteNew } = require('../controllers/entries.controller.js');

router.get('/news', getNews);
router.get('/news/:Id', getNew);

router.post('/news', createNew);

router.delete('/news/:id', deleteNew);

module.exports = router;
