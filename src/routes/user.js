const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

// router.post('/create', departmentController.create);
// router.post('/delete', departmentController.delete);
// router.post('/update', departmentController.update);
router.get('/', userController.index);

module.exports = router;
