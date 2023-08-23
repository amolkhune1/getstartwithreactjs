const fs = require('fs');
class Voucher {
  constructor(fs) {
    this.fsModule = fs;
  }
  async getVoucherList(req, res) {
    try {
      return res.status(200).json({ messsage: 'success', code: 200 });
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        messsage: 'Something went wrong, Please try again later!',
        code: 500,
      });
    }
  }
}
module.exports = new Voucher(fs);
