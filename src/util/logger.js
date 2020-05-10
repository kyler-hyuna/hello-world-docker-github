const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

/**
 * @param {import('express').Express} app
 */
module.exports = (app) => {
  const stream = fs.createWriteStream(
    path.join(__dirname, '../__logs/access.log'),
    { flags: 'a' }
  );

  app.use(morgan('combined', { stream }));
};
