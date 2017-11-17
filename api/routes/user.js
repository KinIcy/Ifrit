const router = require('express').Router();

const userCtrl = require('../controllers/user');

router.post('/singUp', userCtrl.signUp);
router.post('/singIn', userCtrl.signIn);

module.exports = router;
