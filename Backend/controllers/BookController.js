const Book = require('../models/Book')

exports.getAllBooks = (req, res, next) => {
    Book.findAll()
        .then(books => {
            res.status(200).json(books)
        })
        .catch(err => {
            next(err)
        })
}

// CRUD
// C: Create
// R: Read
// U: Update
// D: Delete

exports.getBook = (req, res, next) => {
    const BookId = req.params.Id
    Book.findByPk(BookId)
        .then(book => {
            if (book === null) {
                const error = new Error('Not Found')
                error.statusCode = 422
                throw error
            }
            res.status(200).json(book)
        })
        .catch(err => {
            next(err)
        })
}

exports.addBook = (req, res, next) => { }

exports.editBook = (req, res, next) => { }

exports.deleteBook = (req, res, next) => {
    const BookId = req.params.Id
    Book.findByPk(BookId)
        .then(book => {
            if (book === null) {
                const error = new Error('This Book is not existed In Our Database')
                error.statusCode = 422
                throw error
            }
            return book.destroy({ where: { BookId: BookId } })
        })
        .then(data => {
            res.status(200).json('Book has been deleted sucessfully')
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
}
