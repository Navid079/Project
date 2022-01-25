// Third-party libraries
const express = require('express');

// Controller and middlewares


const router = express.Router();

// TODO: write a controller for this endpoint
// POST /shop/profile/<profile attribute>
// This endpoint is used for setting user's non-media profile attributes
router.post('/:attribute', /* controller */)

// TODO: write a controller for this endpoint
// GET /shop/profile/
// This endpoint is used for getting full user's non-media profile attributes
router.get('/', /*controller */)

// TODO: write a controller for this endpoint 
// POST /shop/profile/media/<profile attribute>
// This endpoint is used for uploading user's profile media attributes
router.post('/media/:attribute', /* controller */)

// TODO: write a controller for this endpoint
// GET /shop/profile/avatar
// This endpoint is used for getting user's avatar
router.get('/avatar', /* controller */)

// TODO: write a controller for this endpoint
// GET /shop/profile/media
// This endpoint is used for getting all user's media documents 
router.get('/media', /* controller */)

module.exports = router;
