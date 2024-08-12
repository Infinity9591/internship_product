const express = require('express');
const router = express.Router();
const positionController = require('../app/controllers/PositionController');

// router.post('/create', departmentController.create);
// router.post('/delete', departmentController.delete);
// router.post('/update', departmentController.update);
router.get('/', positionController.index);

module.exports = router;
