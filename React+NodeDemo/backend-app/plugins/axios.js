const axios = require('axios');
axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
module.exports = axios;
