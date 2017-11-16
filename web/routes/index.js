/**
  @author  Edited by : Daniel Hernandez
  @fileOverview This code represents the routes
 */

const router = require('express').Router();

const user = require('./user');
const userCtrl = require('../controllers/user');
const profile = require('./profile');
const post = require('./post');
const comment = require('./comment');
const auth = require('../middlewares/auth');

router.post('/register', (req, res) =>{
  res.send({
    message: `Tu ${req.body.email} usuario ha sido registrado`,
  })
});

router.get('/', (req, res) =>{
  res.send({
    message: `En Construccion :D`,
  })
});

router.use('/user', user);
router.use('/profile', profile);
router.use('/post', post);
router.use('/comment', comment);
router.post('/singUp', userCtrl.signUp);
router.post('/singIn', userCtrl.signIn);
router.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' });
});

module.exports = router;
