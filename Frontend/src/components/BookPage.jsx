import React, { Component } from 'react'
import { withRouter } from "react-router";
import Swal from 'sweetalert2'
import cart from "../Assets/icons/add-to-cart.svg";
import del from "../Assets/icons/delete.svg";
import edit from "../Assets/icons/edit.svg";
import NavBar from "./NavBar";
import Footer from "./Footer";
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
                <NavBar />
                <div className="container-fluid" style={{ backgroundColor: '#f0f2f6', width: "100%" }}>
                    <div class="container" style={{backgroundColor:'white', borderRadius: '30px', boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)', marginBottom: '20px'}}>
                        <div class="book">
                            <div class="image">
                                <img src={`http://localhost:5000/${this.state.book.CoverImageUrl}`} alt="starry" />
                            </div>
                            <div class="text">
                                <div class="name">{this.state.book.Name}</div>
                                <div class="name author">{this.state.book.BookAuthor}</div>
                                <div class="name author">Price: {this.state.book.Price}$</div>
                                <div class="name author">Number Of Pages: {this.state.book.Pages} Page</div>
                                <div class="name details"> <strong>Description:   </strong>  {this.state.book.FullDescription}</div>
                            </div>
                        </div>

                        <div class="actions">
                            <button href="#" class="btn action"><img src={edit} alt="edit" /></button>
                            <button href="#" class="btn action" onClick={this.deleteBook}><img src={del} alt="delete" /></button>
                            <button href="#" class="btn action"><img src={cart} alt="sell" /></button>
                        </div>
                    </div>
                </div>
                <Footer />
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