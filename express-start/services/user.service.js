const { readFileSync } = require('fs');
module.exports.getVouchers = async (req, res) => {
  try {
    let page = parseInt(req?.query?.page) ?? 1;
    let limit = parseInt(req?.query?.limit) ?? 10;
    let vouchers = JSON.parse(readFileSync('./jsondata.json'));
    let fromIndex = (page - 1) * limit;
    let totalPages = Math.ceil(vouchers.vouchers.length / limit);
    if (page > totalPages) {
      res.status(200).json({
        status: 'success',
        message: 'no data found',
        code: 603,
        totalPages: totalPages,
        data: [],
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: 'success',
        code: 200,
        totalPages: totalPages,
        data: vouchers.vouchers.splice(fromIndex, limit),
      });
    }
  } catch (err) {
    console.log(JSON.stringify(err.stack));
    res.status(200).json({
      status: 'error',
      message: 'Something went worng!',
      code: 400,
      totalPages: 0,
    });
  }
};
