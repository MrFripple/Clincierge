const router = require('express').Router();
const foodAPI = require('./controller/foodAPI.js')

router.get('/api', foodAPI.getImageCallback);
//router.get('/api', foodAPI.getImagePromise);

module.exports = router;