// Third-party libraries
const express = require('express');
const mongoose = require('mongoose');

// Routers import
const requestInitializer = require('./middlewares/requestInitializer');
const authShopRouter = require('./routes/shop/auth');

// Error handler import
const errorHandler = require('./controllers/errorHandlers');

const app = express();

// express.json() is used to parse request bodies.
// The result will be saved in req.body
app.use(express.json());

app.use(requestInitializer);

// Routers
// /shop/something endpoints are shop(seller) endpoints
app.use('/shop', authShopRouter);

app.use(errorHandler.endPointNotFound);

// Error handling middleware
app.use(errorHandler.defaultHandler);

// Database connection and server start
mongoose
  .connect('mongodb://mongo:27017/theProject', { useNewUrlParser: true })
  .then(result => {
    app.listen(3005);
    console.log('Connected');
  })
  .catch(err => console.log(err));
