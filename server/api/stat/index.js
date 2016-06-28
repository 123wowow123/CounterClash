'use strict';

var express = require('express');
var controller = require('./stat.controller');

var router = express.Router();

router.get('/', controller.index);
//router.get('/:id', controller.show);
//router.get('/:name', controller.showByName);

module.exports = router;
