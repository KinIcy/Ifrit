const router = require('express').Router();

const { auth, checkProfile } = require('./middlewares');
const tokenService = require('../helpers/token');

const User = require('../models/user');
const Profile = require('../models/profile');

/**
 * @todo Comment me
 * @param {*} req
 * @param {*} res
 */
function signUp(req, res) {
  const user = new User({
    password: req.body.password,
    name: req.body.name,
    familyName: req.body.familyName,
    dateOfBirth: req.body.dateOfBirth,
    genre: req.body.genre,
    aboutMe: req.body.aboutMe,
    email: req.body.email,
    lastLogin: Date.now(),
  });
  user.save(function (err) {
    if (err) {
      //handleError(res,err) 
      res.status(500).send({ message: `Error al crear el usuario: ${err}` });
    }
    else {
      res.status(201).send({ token: tokenService.createToken(user), user: req.body.user });
    }
  });
}

/**
 * Comment me
 * @param {*} req
 * @param {*} res
 */
function signIn(req, res) {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err });
    if (!user) return res.status(404).send({ message: 'No existe el usuario' });
    req.user = user;
    return res.status(200).send({
      message: 'Te has logueado correctamente',
      token: tokenService.createToken(user),
    });
  });
}

/**
 * Comment me
 * @param {*} req
 * @param {*} res
 */
function userExist(req, res) {
  if (!req.body.user) return res.status(400).send();
  return User.findOne({ user: req.body.user }, (err, user) => {
    if (err) return res.status(500).send({ message: err });
    if (!user) return res.status(200).send({ userExist: false });
    return res.status(200).send({ userExist: true });
  });
}

/**
 * @todo Comment me
 * @param {*} req
 * @param {*} res
 */
function emailExist(req, res) {
  if (!req.body.email) {
    res.status(400).send();
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err });
    if (!user) return res.status(200).send({ emailExist: false });
    return res.status(200).send({ emailExist: true });
  });
}

/**
 * @todo Comment me
 * @param {*} req
 * @param {*} res
 */
function getUser(req, res) {
  User.findOne({ user: req.params.user }).then((user) => {
    if (user) return res.send(user);
    return res.status(404).send({ message: 'user dont exist' });
  }).catch((err) => {
    res.status(500).send({ message: 'error to find user' });
  });
}

/** @todo add missing routes */
router.post('/signUp', signUp);
router.post('/signIn', auth, signIn);

router.post('/profile', (req, res) => {
  User.findById(req.user)
    .then(user => user.createProfile(req.params.name))
    .then((user) => {
      if (req.params.nickname !== '') return user.createProfile(req.params.nickname, true);
      return null;
    })
    .then(() => res.end())
    .catch(error => res.status('422').send(`An error ocurred while creating user profile: ${error.message}`));
});

router.get('/profile/', checkProfile, (req, res) => {
  Profile.findById(req.activeProfile).select('name').exec()
    .then(profile => res.json(profile).end())
    .catch(error => res.status('422').send(`An error ocurred while getting user profile: ${error.message}`));
});

module.exports = router;
