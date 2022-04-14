const express = require('express');
const { postUpload } = require('../controllers/upload.controller');
const { verifyFile } = require('../Middlewares/verifyFile');
const router = express.Router();

router.post('/',verifyFile, postUpload);

module.exports = router;
