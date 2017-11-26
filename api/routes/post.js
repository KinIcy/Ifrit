const router = require('express').Router();

const Post = require('../models/post');

router.put('/:post/', (req, res) => {
  Post.findById(req.params.post)
    .then((post) => {
      if (post.author === req.user) {
        return post.update({ content: req.body.content });
      } throw new Error('Usar can not edit this post.');
    })
    .catch(error => res.send(`An error ocurred while updating post: ${error.message}`));
});

router.delete('/:post/', (req, res) => {
  Post.findById(req.params.post)
    .then(post => post.deletePost(req.activeProfile))
    .then(() => res.end())
    .catch(error => res.send(`An error ocurred while deleting post: ${error.message}`));
});

module.exports = router;
