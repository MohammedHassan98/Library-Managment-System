const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController')

/* GET All Books. */
router.get('/', bookController.getAllBooks)
/* GET Book by Its Id. */
router.get('/:Id', bookController.getBook)


module.exports = router;
