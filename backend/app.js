// Third-party libraries
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// express.json() is used to parse request bodies.
// The result will be saved in req.body
app.use(express.json());

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
  if (err.values) response.data.values = err.values;
  if (err.conflicts) response.data.conflicts = err.conflicts;

  res.status(status).json(response);
});

// Database connection and server start
mongoose
  .connect('mongodb://localhost:27017/theProject', { useNewUrlParser: true })
  .then(result => {
    app.listen(3000);
    console.log('Connected');
  })
  .catch(err => console.log(err));
