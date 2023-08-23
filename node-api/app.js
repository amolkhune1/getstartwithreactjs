const http = require('http');
const router = require('./routes/index');
const server = http.createServer((req, res) => {
  router(req, res);
});

server.listen(4000, () => {
  console.log(`Server is running`);
});
