const User = require('../../models/user');

function checkProfile(req, res, next) {
  User.findById(req.user)
    .then((user) => {
      if (user.personalProfile === undefined) {
        req.status(403).send('Error: User has no profile');
      } else {
        req.personalProfile = user.personalProfile;
        req.anonymouseProfile = user.anonymouseProfile;
        next();
      }
    })
    .catch(error => res.status('503').send(`An error ocurred while checking profile: ${error.message}`));
}

module.exports = { checkProfile };
