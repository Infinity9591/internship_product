const express = require('express');
const router = express.Router();
const departmentController = require('../app/controllers/DepartmentController');

router.post('/create', departmentController.create);
router.post('/delete', departmentController.delete);
router.post('/update', departmentController.update);
router.get('/', departmentController.index);

module.exports = router;
