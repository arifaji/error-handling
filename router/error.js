const express = require('express');
const router = express.Router();
const errorController = require('../controller/errorController')

router.get('/error', errorController.response);

module.exports = router;