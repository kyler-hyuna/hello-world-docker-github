require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send({
    message: `Hello ${process.env.NAME}`,
  });
});

app.get('/random', (req, res) => {
  res.send({
    message: Math.floor(Math.random() * 10),
  });
});

app.get('/monitor', (req, res) => res.status(200).send('ok'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
