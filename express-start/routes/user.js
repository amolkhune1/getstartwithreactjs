const route = require('express').Router();
const userController = require('../controllers/user.controller');
route.get('/', (req, res, next) => {
  userController.getVouchers(req, res);
  console.log('in if');
});
module.exports = route;
