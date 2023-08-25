const axios = require('axios');
module.exports.getPosts = async (req, res, next) => {
  let pageNo = parseInt(req.query?.page) || 1;
  let limit = 10;
  try {
    let postsData = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(postsData);
    if (postsData.data?.length) {
      let response = {
        totalRecords: 0,
        totalPages: 0,
        data: [],
        code: 200,
        message: 'success',
      };
      let indexFrom = (pageNo - 1) * limit;
      response.totalRecords = postsData.data.length;
      response.totalPages = Math.ceil(response.totalRecords / limit);
      response.data = postsData.data.splice(indexFrom, limit);
      res.status(200).json(response);
    } else {
      res
        .status(200)
        .json({ status: 'error', message: 'No data found', code: 603 });
    }
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .json({ status: 'error', message: 'Something went wrong!', code: 500 });
  }
};
