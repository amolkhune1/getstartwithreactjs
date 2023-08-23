const voucherRoute = require('express').Router();
const controller = require('../controllers/vouhcer.controller');
const {
  checkRequestErrors,
  validateVoucherListRequest,
} = require('../middleware/validate');
voucherRoute.get(
  '/list',
  validateVoucherListRequest,
  checkRequestErrors,
  (req, res, next) => {
    controller.getVoucherList(req, res, next);
  }
);
module.exports = voucherRoute;
