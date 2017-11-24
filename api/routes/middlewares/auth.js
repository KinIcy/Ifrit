/**
  @author  Daniel Hernandez
  @fileOverview This code represents the service of Authentication
 */
const tokenService = require('./../../helpers/token');

function isAuth(req, res, next) {
  console.log(req.headers);
  if (!req.headers.authorization) {
    res.status(403).send({ message: 'No tienes autorizacion' });
  } else {
    const token = req.headers.authorization.split(' ')[1];
    tokenService.decodeToken(token)
      .then((response) => {
        req.user = response;
        next();
      })
      .catch((response) => {
        res.satus(response.status);
      });
  }
}

module.exports = isAuth;
