const express = require('express');
const route = express.Router();
const { celebrate, Segments } = require('celebrate');
const onBoaringCtrl = require('../controllers/onboarding.js');
const paramValidation = require('../validations/onboarding.js');

route.route('/store/owner/details')
.post(
    celebrate({[Segments.BODY]: paramValidation.onboardingStoreBusinessOwnerDetails.body}),
    onBoaringCtrl.onboardingStoreBusinessOwnerDetails
)

module.exports = route;