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

exports.getBook = (req, res, next) => {
    const BookId = req.params.Id

    Book.findByPk(BookId)
        .then(book => {
            if (book === null) {
                const error = new Error('This book is not found')
                error.statusCode = 422
                throw error
            }
            res.status(200).json(book)
        })
        .catch(err => {
            next(err)
        })
}