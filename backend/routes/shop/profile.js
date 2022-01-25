// Third-party libraries
const express = require('express');

// Controller and middlewares
const controller = require('../../controllers/shop/profile');

const router = express.Router();

// PATCH /shop/profile/
// This endpoint is used for setting user's non-media profile attributes
router.patch('/', controller.patchShopProfile);

// GET /shop/profile/
// This endpoint is used for getting full user's non-media profile attributes
router.get('/', controller.getShopProfile);

// POST /shop/profile/media/<profile attribute>
// This endpoint is used for uploading user's profile media attributes
router.post('/media/:attribute', controller.postShopProfileMediaParam);

// GET /shop/profile/avatar
// This endpoint is used for getting user's avatar
router.get('/avatar', controller.getShopProfileAvatar);

// GET /shop/profile/media
// This endpoint is used for getting all user's media documents
router.get('/media', controller.getShopProfileMedia);

module.exports = router;
