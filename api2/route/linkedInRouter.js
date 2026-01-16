const express = require('express');
const { linkedInWork } = require('../controll/linkedIn');

const router = express.Router();



router.get('/callback', linkedInWork);


module.exports = router;