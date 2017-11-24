const router = require('express').Router();
const auth = require('./middlewares/auth');

const userCtrl = require('../controllers/user');

router.post('/signUp', userCtrl.signUp);
router.post('/signIn', auth, userCtrl.signIn);

module.exports = router;
