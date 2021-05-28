import React, { Component } from 'react'
import { withRouter } from "react-router";
import Swal from 'sweetalert2'
import del from "../Assets/icons/delete.svg";
import edit from "../Assets/icons/edit.svg";
import NavBar from "./NavBar";
import Footer from "./Footer";
class BookPage extends Component {
    state = {
        book: {},
        Name: '',
        ShortDescription: '',
        FullDescription: '',
        CoverImageUrl: {},
        BookAuthor: '',
        Pages: null,
        Price: null,
        Category: '',
        Quantity: null,
    }

    componentDidMount() {
        this.getBook()
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

  handleFileChange = (event) => {
        this.setState({ CoverImageUrl: event.target.files[0] })
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
                            'Your Book has been deleted.',
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


    editBook = (e) => {
        e.preventDefault()
        let Id = this.props.match.params.id

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sell it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/books/sellBook/${Id}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: this.state.book
                }).then(res => res.json())
                    .then(respose => {
                        Swal.fire(
                            'Sold!',
                            'Your Book has been Sold.',
                            'success'
                        )
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
                    <div class="container" style={{ backgroundColor: 'white', borderRadius: '30px', boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)', marginBottom: '20px' }}>
                        <div class="book">
                            <div class="image">
                                <img src={`http://localhost:5000/${this.state.book.CoverImageUrl}`} alt="starry" />
                            </div>
                            <div class="text">
                                <div class="name">{this.state.book.Name}</div>
                                <div class="name author">{this.state.book.BookAuthor}</div>
                                <div class="name author">Price: {this.state.book.Price}$</div>
                                <div class="name author">Number Of Pages: {this.state.book.Pages} Page</div>
                                <div class="name author">Number Of Copies: {this.state.book.Quantity} Copy</div>
                                <div class="name details"> <strong>Description:   </strong>  {this.state.book.FullDescription}</div>
                            </div>
                        </div>

                        <div class="actions">
                            <button type="button" class="btn action" onClick={this.deleteBook}><img src={del} alt="delete" /></button>
                            <button type="button" class="btn action" data-bs-toggle="modal" data-bs-target="#editModal">
                                <img src={edit} alt="edit" />
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />


                <div className="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit Book</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form encType="multipart/form-data" onSubmit={this.addBook} autoComplete="on">

                                    <div className="mb-3">
                                        <label htmlFor="BookName" className="form-label addBookLabels">Book Name</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} name="Name" onChange={this.handleChange} 
                                        value={this.state.book.Name} id="BookName" aria-describedby="emailHelp" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="BookAuthor" className="form-label addBookLabels">Book Auhtor</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="BookAuthor"
                                            onChange={this.handleChange} value={this.state.book.BookAuthor} name="BookAuthor" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="ShortDescription" className="form-label addBookLabels">Short Description</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="ShortDescription"
                                            onChange={this.handleChange} value={this.state.book.ShortDescription} name="ShortDescription" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="FullDescription" className="form-label addBookLabels">Full Description</label>
                                        <textarea type="text" className="form-control" style={{ borderRadius: '3px' }} id="FullDescription"
                                            onChange={this.handleChange} value={this.state.book.FullDescription} name="FullDescription" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Category" className="form-label addBookLabels">Category</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="Category"
                                            onChange={this.handleChange} value={this.state.book.Category} name="Category" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Price" className="form-label addBookLabels">Price</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Price"
                                            onChange={this.handleChange} value={this.state.book.Price} name="Price" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Pages" className="form-label addBookLabels">Pages</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Pages"
                                            onChange={this.handleChange} value={this.state.book.Pages} name="Pages" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Quantity" className="form-label addBookLabels">Quantity</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Quantity"
                                            onChange={this.handleChange} value={this.state.book.Quantity} name="Quantity" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="CoverImageUrl" className="form-label addBookLabels">CoverImageUrl</label>
                                        <input type="file" className="form-control" style={{ borderRadius: '3px' }} id="CoverImageUrl"
                                            onChange={this.handleFileChange} name="CoverImageUrl" required />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn" style={{ backgroundColor: '#3db98b', color: 'white', fontWeight: 'bolder' }} >Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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