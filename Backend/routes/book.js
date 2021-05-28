const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController')

// TODO Validations + Add Authentication

/* GET All Books. */
router.get('/', bookController.getAllBooks)

/* GET Book by Its Id. */
router.get('/:Id', bookController.getBook)

/* Add Book To DB. */
router.post('/addBook', bookController.addBook)

/* Edit Book. */
router.post('/editBook/:Id', bookController.editBook)

/* Edit Book. */
router.post('/sellBook/:Id', bookController.editBook)

/* Delete Book From DB. */
router.delete('/deleteBook/:Id', bookController.deleteBook)

module.exports = router;
