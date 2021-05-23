const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController')

/* GET home page. */
router.get('/', bookController.getAllBooks)

router.get('/:Id', bookController.getBook)


module.exports = router;
