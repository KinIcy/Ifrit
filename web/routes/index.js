const router = require('express').Router();

const user = require('./user');
const profile = require('./profile');
const post = require('./post');
const comment = require('./comment');

router.use('/user', user);
router.use('/profile', profile);
router.use('/post', post);
router.use('/comment', comment);

module.exports = router;
