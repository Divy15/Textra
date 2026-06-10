const express = require('express');
const route = express.Router();
const onBoardingRoute = require('./onboarding.js');
const uploadRoute = require('./upload.js');

route.use('/onboarding', onBoardingRoute);

route.use('/upload', uploadRoute);

module.exports = route;