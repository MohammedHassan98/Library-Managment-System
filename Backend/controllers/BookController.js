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

exports.addBook = (req, res, next) => {

    if (!req.file) {
        const error = new Error('No Image Provided');
        error.statusCode = 422;
        throw error;
    }

    const Name = req.body.Name;
    const ShortDescription = req.body.ShortDescription;
    const FullDescription = req.body.FullDescription;
    const CoverImageUrl = req.file.path;
    const BookAuthor = req.body.BookAuthor
    const Pages = req.body.Pages
    const Price = req.body.Price
    const Category = req.body.Category
    const Quantity = req.body.Quantity


    Book.create({ Name, ShortDescription, FullDescription, BookAuthor, CoverImageUrl, Category, Pages, Price, Quantity })
        .then(result => {
            res.status(200).json("Book has Been created successfully")
        }).catch(err => {
            next(err)
        })
}

exports.editBook = (req, res, next) => {
    const BookId = req.params.Id

    const Name = req.body.Name;
    const ShortDescription = req.body.ShortDescription;
    const FullDescription = req.body.FullDescription;
    const BookAuthor = req.body.BookAuthor
    const Pages = req.body.Pages
    const Price = req.body.Price
    const Category = req.body.Category
    const Quantity = req.body.Quantity

    Book.findByPk(BookId)
        .then((book) => {
            book.Name = Name;
            book.ShortDescription = ShortDescription;
            book.FullDescription = FullDescription;
            book.BookAuthor = BookAuthor;
            book.Pages = Pages;
            book.Price = Price;
            book.Category = Category;
            book.Quantity = Quantity;

            return book.save();
        }).then(result => {
            res.status(200).json("Book has been edited Successfully")
        })
        .catch((err) => {
            next(err)
        });
}

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
