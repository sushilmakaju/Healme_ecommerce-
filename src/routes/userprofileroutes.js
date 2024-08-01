const userProfile = require('../controller/usercontroller');
const express = require('express');
const router = express.Router();

router.post('/userprofile', userProfile);

module.exports = router;