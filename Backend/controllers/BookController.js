const { noExtendLeft } = require('sequelize/types/lib/operators')
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