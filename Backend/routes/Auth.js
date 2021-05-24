var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController')

/* Add New Admin. */
router.post('/signup',AuthController.SignUp)

/* Authenticate Admin. */
router.post('/signin',AuthController.SignIn)


module.exports = router;
