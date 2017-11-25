/**
  @author  Daniel Hernandez
  @fileOverview This code represents the service of Authentication
 */

const token = require('./../../helpers/token');

/**
 * @todo document me.
 */
function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    res.status(403).send({ message: 'No tienes autorizacion' });
  } else {
    const { err, response } = token.decodeToken(req.headers.authorization.split(' ')[1]);
    if (err) {
      res.status(err.status).send({ message: err.message });
    } else {
      req.user = response;
      next();
    }
  }
}

module.exports = isAuth;
