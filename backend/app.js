// Third-party libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routers import
const requestInitializer = require('./middlewares/requestInitializer');
const shopRouter = require('./routes/shop');

// Error handler import
const errorHandler = require('./controllers/errorHandlers');

const app = express();

app.use(cors());

// express.json() is used to parse request bodies.
// The result will be saved in req.body
app.use(express.json());

app.use(requestInitializer);

// Routers
// /shop/something endpoints are shop(seller) endpoints
app.use('/shop', shopRouter);

app.use(errorHandler.endPointNotFound);

// Error handling middleware
app.use(errorHandler.defaultHandler);

// Database connection and server start
mongoose
  .connect('mongodb://localhost:27017/theProject', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(3005);
    console.log('Connected');
  })
  .catch(err => console.log(err));

module.exports = app;
