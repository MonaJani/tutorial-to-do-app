const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');


router.post('/registration', UserController.register)

module.exports = router;