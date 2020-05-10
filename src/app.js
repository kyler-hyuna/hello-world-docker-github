require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

require('./util/logger')(app);

app.get('/', (req, res) => {
  res.send({
    message: `Hello ${process.env.NAME}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
