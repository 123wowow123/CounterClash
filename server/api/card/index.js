'use strict';

var express = require('express');
var controller = require('./card.controller');

var router = express.Router();

router.get('/', controller.index);
//router.get('/:id', controller.show);
router.get('/:name', controller.showByName);
router.get('/showByNameIncludeStat/:name', controller.showByNameIncludeStat);

module.exports = router;
