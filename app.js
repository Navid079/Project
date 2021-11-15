const express = require('express');
const mongoose = require('mongoose');

const authShopRouter = require('./routes/authShop');

const app = express();

app.use(express.json());

app.use('/shop', authShopRouter);

mongoose
  .connect('mongodb://localhost:27017/theProject')
  .then(result => {
    app.listen(3000);
    console.log('Connected');
  })
  .catch(err => console.log(err));
