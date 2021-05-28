import React, { Component } from 'react'
import AddIcon from '../Assets/icons/add.svg'
import { Link } from "react-router-dom";
export default class NavBar extends Component {

    state = {
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

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFileChange = (event) => {
        this.setState({ CoverImageUrl: event.target.files[0] })
    }

    addBook = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('Name', this.state.Name)
        formData.append('ShortDescription', this.state.ShortDescription)
        formData.append('FullDescription', this.state.FullDescription)
        formData.append('CoverImageUrl', this.state.CoverImageUrl)
        formData.append('BookAuthor', this.state.BookAuthor)
        formData.append('Pages', this.state.Pages)
        formData.append('Price', this.state.Price)
        formData.append('Category', this.state.Category)
        formData.append('Quantity', this.state.Quantity)

        console.log(formData)

        fetch('http://localhost:5000/books/addBook', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(JSONres => { console.log(JSONres) }).catch()
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
                    <Link className="navbar-brand" style={{ color: '#2B8BFF', fontWeight: '800', fontSize: '20px', padding: '2px' }} to="/home">Library</Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <img src={AddIcon} alt="addIcon" />
                                </button>
                                Add New Book
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-nav">
                        <form>
                            <div style={{ display: 'inline-block', width: '50rem' }}>
                                <input type="text" placeholder="Search" className="form-control ms-3 w-100" />
                            </div>
                            <button className="btn btn-primary ms-4">Search</button>
                        </form>
                    </div>
                </nav>


                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Add New Book</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form encType="multipart/form-data" onSubmit={this.addBook} autoComplete="on">

                                    <div className="mb-3">
                                        <label htmlFor="BookName" className="form-label addBookLabels">Book Name</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} name="Name" placeholder="Book Name"
                                            onChange={this.handleChange} value={this.state.Name} id="BookName" aria-describedby="emailHelp" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="BookAuthor" className="form-label addBookLabels">Book Auhtor</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="BookAuthor" placeholder="Book Author"
                                            onChange={this.handleChange} value={this.state.BookAuthor} name="BookAuthor" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="ShortDescription" className="form-label addBookLabels">Short Description</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="ShortDescription" placeholder="Short Description"
                                            onChange={this.handleChange} value={this.state.ShortDescription} name="ShortDescription" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="FullDescription" className="form-label addBookLabels">Full Description</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="FullDescription" placeholder="Full Description"
                                            onChange={this.handleChange} value={this.state.FullDescription} name="FullDescription" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Price" className="form-label addBookLabels">Price</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Price" placeholder="Book Price"
                                            onChange={this.handleChange} value={this.state.Price} name="Price" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Pages" className="form-label addBookLabels">Pages</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Pages" placeholder="Book Pages Number"
                                            onChange={this.handleChange} value={this.state.Pages} name="Pages" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Quantity" className="form-label addBookLabels">Quantity</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Quantity" placeholder="Quantity"
                                            onChange={this.handleChange} value={this.state.Quantity} name="Quantity" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="CoverImageUrl" className="form-label addBookLabels">CoverImageUrl</label>
                                        <input type="file" className="form-control" style={{ borderRadius: '3px' }} id="CoverImageUrl" placeholder="Book Cover"
                                            onChange={this.handleFileChange} name="CoverImageUrl" required />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn" style={{ backgroundColor: '#3db98b', color: 'white', fontWeight: 'bolder' }}>Add</button>
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
