const route = require('express').Router();
const postController = require('../controllers/post.controller');
route.get('/', (req, res, next) => {
  postController.getPosts(req, res, next);
});
module.exports = route;
