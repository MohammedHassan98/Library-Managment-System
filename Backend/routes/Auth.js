var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController')
// TODO Setup signIn and SignUp routes

router.post('/signup',AuthController.SignUp)

// router.post('/signin',AuthController.SignIn)


module.exports = router;
