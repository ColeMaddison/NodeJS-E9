const {Router} = require('express');

const routes = Router();

// Messages API
routes.use('/messages', require('./messages'));

module.exports = routes;

