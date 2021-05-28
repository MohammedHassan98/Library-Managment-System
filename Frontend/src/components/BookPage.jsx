import React, { Component } from 'react'
import { withRouter } from "react-router";
// import { Redirect } from 'react-router-dom'

class BookPage extends Component {
    state = {
        book: {}
    }

    componentDidMount() {
        this.getBook()
    }

    getBook = () => {
        let id = this.props.match.params.id
        fetch(`http://localhost:5000/books/${id}`)
            .then(book => book.json())
            .then(bookData => {
                console.log(bookData)
                this.setState({ book: bookData })
            })
            .catch(err => {
                console.log(err)
            })
    }


    deleteBook = (e) => {
        e.preventDefault()
        let Id = this.props.match.params.id
        fetch(`http://localhost:5000/books/deleteBook/${Id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
            .then(respose => {
                console.log(respose)
                this.props.history.push(`/home`)
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.book.Name}</h1>
                    <p>{this.state.book.Category}</p>
                    <p>{this.state.book.BookAuthor}</p>
                    <p>{this.state.book.Description}</p>
                    <p>{this.state.book.Price}</p>
                    <p>{this.state.book.Pages}</p>
                    <p>{this.state.book.Quantity}</p>
                </div>

                <button className="btn btn-danger" onClick={this.deleteBook}>Delete</button>
            </div>
        )
    }
}

export default withRouter(BookPage);


// BookAuthor: "Mohammed Hassan"
// BookId: 4
// Category: "Horror"
// CoverImageUrl: "None"
// Description: "Book1 "
// Name: "Book1"
// Pages: 200
// Price: 45
// Quantity: 12
// createdAt: null
// updatedAt: null