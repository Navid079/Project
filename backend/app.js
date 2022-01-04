// Third-party libraries
const express = require('express');
const mongoose = require('mongoose');

// Routers import
const requestInitializer = require('./middlewares/requestInitializer');
const authShopRouter = require('./routes/shop/auth');

const app = express();

// express.json() is used to parse request bodies.
// The result will be saved in req.body
app.use(express.json());

app.use(requestInitializer);

// Routers
// /shop/something endpoints are shop(seller) endpoints
app.use('/shop', authShopRouter);

// Simple error handling middleware - may be changed in the future
app.use((err, req, res, next) => {
  let status = err.statusCode;
  if (!status) {
    status = 500;
  }

  const response = { message: 'An error occured', data: {} };
  if (err.messages) response.data.messages = err.messages;
  else response.data.messages = err.stack;
  if (err.values) response.data.values = err.values;
  if (err.conflicts) response.data.conflicts = err.conflicts;

  res.status(status).json(response);
});

// Database connection and server start
mongoose
  .connect('mongodb://mongo:27017/theProject', { useNewUrlParser: true })
  .then(result => {
    app.listen(3005);
    console.log('Connected');
  })
  .catch(err => console.log(err));
