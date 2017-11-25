/**
 * @fileOverview Contains the service for create and decode Tokens
 * @author Daniel Hernandez Cuero
 */
const jwt = require('jwt-simple');
const moment = require('moment');


/**
 * @todo Comment me.
 * @param {*} user
 */
function createToken(user) {
  const payload = {
    sub: user.user,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix(),
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET || 'averyveryverysecretsecret');
}

/**
 * @todo Comment me.
 * @param {*} token
 */
function decodeToken(token) {
  try {
    const payload = jwt.decode(token, process.env.SECRET_TOKEN);
    if (payload.exp <= moment().unix()) return [{ status: 401, message: 'El token ha expirado' }];
    return [null, payload.sub];
  } catch (err) {
    return [{ status: 500, message: 'Invalid Token' }];
  }
}

module.exports = {
  createToken,
  decodeToken,
};
