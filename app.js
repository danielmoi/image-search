const express = require('express');
const dotenv = require('dotenv');

const models = require('./models');

dotenv.config({ path: '.env' });

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5001;

app.use('/', routes);

app.use((err, req, res, next) => {
  console.log('⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔');
  console.log('err:', err);
  res.statusMessage = err.message; // eslint-disable-line
  res.json(err).status(400);
  next();
});

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`🌳  🌳  🌳  Now listening on ${port} 🌳  🌳  🌳`);
  });
});
