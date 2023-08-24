const userService = require('../services/user.service');
module.exports.getVouchers = async (req, res) => {
  userService.getVouchers(req, res);
};
