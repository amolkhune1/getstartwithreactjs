const { check, validationResult } = require('express-validator');
module.exports.checkRequestErrors = function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({
      message: 'error',
      errors: errors
        .array()
        .map((err) => err.msg)
        .join(', '),
      code: 603,
    });
  }
  next();
};

module.exports.validateVoucherListRequest = [
  check('page')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .isInt()
    .withMessage('Page should be integer'),
  check('limit')
    .optional()
    .trim()
    .escape()
    .isInt()
    .withMessage('Record limit should be integer'),
];
