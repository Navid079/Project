const express = require('express');
const authShopController = require('../controllers/authShop');

const router = express.Router();

router.post('/signup', authShopController.postShopSignup);

module.exports = router;
