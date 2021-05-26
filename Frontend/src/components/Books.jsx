import React, { Component } from 'react'
import Card from './Card'
export default class Books extends Component {

    state = {
        books: []
    }

    getAllBooks = () => {
        fetch('http://localhost:5000/books/')
            .then(books => books.json())
            .then(booksData => {
                console.log(booksData)
                this.setState({ books: booksData })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getAllBooks()
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {this.state.books.map(book => (
                            <div className="col-3">
                                <Card book={book} />
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
