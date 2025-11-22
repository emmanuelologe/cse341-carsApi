const express = require('express');
const router = express.Router();

router.use('/cars', require('./cars'));
/* router.use('/', require('./swagger')); */

module.exports = router;