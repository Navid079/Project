// GET /shop/dashboard
//This middleware fetches shop dashboard data
exports.getShopDashboard = (req, res, next) => {
  res.status(200).json({
    message: "GET /shop/dashboard",
    data: {
      test: "Endpoint is working!"
    }
  })
}

// GET /shop/dashboard
//This middleware fetches shop dashboard report page data
exports.getShopReport = (req, res, next) => {
  res.status(200).json({
    message: "GET /shop/dashboard",
    data: {
      test: "Endpoint is working!"
    }
  })
}

// GET /shop/dashboard
//This middleware fetches shop newsletters
exports.getShopNewsletter = (req, res, next) => {
  res.status(200).json({
    message: "GET /shop/dashboard",
    data: {
      test: "Endpoint is working!"
    }
  })
}

// GET /shop/dashboard
//This middleware fetches shop shop items
exports.getShopItems = (req, res, next) => {
  res.status(200).json({
    message: "GET /shop/dashboard",
    data: {
      test: "Endpoint is working!"
    }
  })
}