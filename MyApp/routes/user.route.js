const express = require('express');
const controller = require('../controller/user.controller');
const controllerDelete = require('../controller/delete.controller');

const validate = require('../validate/user.validate');

const router = express.Router();

router.get('/', controller.index);

router.get('/cookie', (req, res, next) => {
  res.cookie('userId', 1111);
  res.send('xxxx');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.get('/delete/:id', controllerDelete.delete);

router.post('/create', validate.postCreate, controller.postCreate); // receive POST form

module.exports = router;
