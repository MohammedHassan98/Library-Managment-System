import React, { Component } from 'react'
import { withRouter } from "react-router";
import Swal from 'sweetalert2'

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

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/books/deleteBook/${Id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                }).then(res => res.json())
                    .then(respose => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        this.props.history.push(`/home`)
                    }).catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!, Please Try Again in Moments',
                        })
                    })
            }
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