const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://goweek:goweek123@ds033337.mlab.com:33337/goweek-backend', {
  useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Server stared on port 3000');
});
