const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const verifyToken = require("../middlewares/verifyToken");

router.post('/login', siteController.login);
router.post('/authorized',verifyToken, siteController.authorized);
// router.get('/', siteController.)

module.exports = router;
