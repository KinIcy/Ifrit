

const User = require('../models/user');
const service = require('../helpers/token');

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
    return res.status(201).send({ token: service.createToken(user), user: req.body.user });
  });
}

function signIn(req, res) {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err });
    if (!user) return res.status(404).send({ message: 'No existe el usuario' });
    req.user = user;
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createToken(user),
    });
  });
}

function userExist(req, res) {
  if (!req.body.user) {
    return res.status(400).send();
  }
  User.findOne({ user: req.body.user }, (err, user) => {
    if (err) return res.status(500).send({ message: err });
    if (!user) return res.status(200).send({ userExist: false });
    return res.status(200).send({ userExist: true });
  });
}

function emailExist(req, res) {
  if (!req.body.email) {
    return res.status(400).send();
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err });
    if (!user) return res.status(200).send({ emailExist: false });
    returnres.status(200).send({ emailExist: true });
  });
}

function getUser(req, res) {
  User.findOne({ user: req.params.user })
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'user dont exist' });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'error to find user' });
    });
}


module.exports = {
  signUp,
  signIn,
  userExist,
  emailExist,
  getUser,
};
