const router = require('express').Router();

const Profile = require('../models/profile');

router.get('/:profile/', (req, res) => {
  Profile.findById(req.params.profile).select('name ')
    .exec()
    .then(profile => res.json(profile).end())
    .catch(error => res.send(`An error ocurred while getting profile data: ${error.message}`));
});

router.post('/:profile/post', (req, res) => {
  Profile.findById(req.params.profile)
    .then(profile => profile.createPost(req.body.content, req.activeProfile))
    .then(() => res.end())
    .catch(error => res.status(422).send(`An error ocurred while creating the post: ${error.message}`));
});

/**
 * @todo Test me
 */
router.get('/:profile/posts', (req, res) => {
  Profile.findById(req.params.profile)
    .select('posts')
    .slice('posts', [req.query.offset || 0, req.query.limit || -1])
    .populate({
      path: 'posts',
      select: 'author content date',
      populate: { path: 'author', select: 'name' },
    })
    .exec()
    .then(profile => res.json(profile.posts).end())
    .catch(error => res.send(`An error ocurred while getting posts: ${error.message}`));
});

module.exports = router;
