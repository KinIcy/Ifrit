/**
  @author  Daniel Hernandez
  @fileOverview This code represents the service of Authentication
 */
const service = require('../services');

function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorizacion' });
  }
  const token = req.headers.authorization.split(' ')[1];
  service.decodeToken(token)
    .then((response) => {
      req.user = response;
      next();
    })
    .catch((response) => {
      res.satus(response.status);
    });
}

module.exports = isAuth;
