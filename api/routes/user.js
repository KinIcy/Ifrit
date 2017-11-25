const router = require('express').Router();

const middlewares = require('./middlewares');
const tokenService = require('../helpers/token');

const User = require('../models/user');

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
  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` });
    return res.status(201).send({ token: tokenService.createToken(user), user: req.body.user });
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

router.post('/signUp', signUp);
router.post('/signIn', middlewares.auth, signIn);

module.exports = router;
