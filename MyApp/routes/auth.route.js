const express = require('express');
const controller = require('../controller/auth.controller');

const router = express.Router();

router.get('/login', controller.login);
router.post('/create', controller.postLogin);

module.exports = router;
