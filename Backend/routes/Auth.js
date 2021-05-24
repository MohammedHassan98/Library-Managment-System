var express = require('express');
var router = express.Router();

// TODO Setup signIn and SignUp routes

router.get('/', function(req, res, next) {
  res.send("Auth Route");
});

module.exports = router;
