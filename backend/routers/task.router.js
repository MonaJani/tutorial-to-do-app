const express = require('express');
const router = express.Router();
const TaskController = require('../controller/task.controller');

router.post('/create', TaskController.createTask);
router.get('/', TaskController.getTasks);

module.exports = router;