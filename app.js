const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/theProject')
  .then(result => {
    app.listen(3000);
    console.log('Connected');
  })
  .catch(err => console.log(err));
