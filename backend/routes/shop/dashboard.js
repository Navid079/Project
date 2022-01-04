const express = require('express');

const shopDashboardController = require('../../controllers/shop/dashboard');

const router = express.Router();

// GET /shop/dashboard
router.get('/', shopDashboardController.getShopDashboard);

// GET /shop/dashboard/report
router.get('/report', shopDashboardController.getShopReport);

// GET /shop/dashboard/newsletter
router.get('/newsletter', shopDashboardController.getShopNewsletter);

// GET /shop/dashboard/items
router.get('/items', shopDashboardController.getShopItems);

module.exports = router;
