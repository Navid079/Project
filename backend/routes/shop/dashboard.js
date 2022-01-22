// Third-party libraries
const express = require('express');

// Controller and middlewares
const shopDashboardController = require('../../controllers/shop/dashboard');

const router = express.Router();

// GET /shop/dashboard
// This endpoint is used for fetching dashboard page data
router.get('/', shopDashboardController.getShopDashboard);

// GET /shop/dashboard/report
// This endpoint is used for fetching report page data
router.get('/report', shopDashboardController.getShopReport);

// GET /shop/dashboard/newsletter
// This endpoint is used for fetching newsletters
router.get('/newsletter', shopDashboardController.getShopNewsletter);

// GET /shop/dashboard/items
// This endpoint is used for fetching shop items
router.get('/items', shopDashboardController.getShopItems);

module.exports = router;
