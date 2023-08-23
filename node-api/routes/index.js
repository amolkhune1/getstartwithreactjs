const controller = require('../controllers/controller');
const router = async function (req, res) {
  // GET: /api/blogs
  if (req.url === '/api/list' && req.method === 'GET') {
    console.log(req.url);
    // get all blogs
    const blogs = [
      {
        title: 'aaa',
        id: 1,
      },
      {
        title: 'bbb',
        id: 2,
      },
    ];

    // set the status code and content-type
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // send data
    res.end(JSON.stringify({ data: blogs, message: 'success', code: 200 }));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Access Denied!', code: 500 }));
  }
};

module.exports = router;
