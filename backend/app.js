const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use('/shop', authShopRouter);

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

mongoose
  .connect('mongodb://localhost:27017/theProject')
  .then(result => {
    app.listen(3000);
    console.log('Connected');
  })
  .catch(err => console.log(err));
