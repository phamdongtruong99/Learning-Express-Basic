const express = require('express');
const controller = require('../controller/product.controller');
const router = express.Router();

router.get('/', controller.index);

router.get('/hello', (req, res) => {
  res.send('hello');
});

module.exports = router;
