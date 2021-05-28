import React, { Component } from 'react'
import AddIcon from '../Assets/icons/add.svg'
import axios from "axios";

export default class NavBar extends Component {

    state = {
        Name: '',
        ShortDescription: '',
        FullDescription: '',
        CoverImageUrl: {},
        BookAuthor: '',
        Pages: 0,
        Price: 0,
        Category: '',
        Quantity: 0,
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
        const data = new FormData()
        data.append('Name', this.state.Name)
        data.append('ShortDescription', this.state.ShortDescription)
        data.append('FullDescription', this.state.FullDescription)
        data.append('CoverImageUrl', this.state.CoverImageUrl)
        data.append('BookAuthor', this.state.BookAuthor)
        data.append('Pages', this.state.Pages)
        data.append('Price', this.state.Price)
        data.append('Category', this.state.Category)
        data.append('Quantity', this.state.Quantity)

        console.log(data)

        axios.post('http://localhost:5000/books/addBook', data)
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:5000/books/addBook',
        //     data: data,
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }).then(JSONres => { console.log(JSONres) }).catch()
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <img src={AddIcon} alt="addIcon" />
                                    </button>

                                </a>
                            </li>
                        </ul>
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
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} name="Name"
                                            onChange={this.handleChange} value={this.state.Name} id="BookName" aria-describedby="emailHelp" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="BookAuthor" className="form-label addBookLabels">Book Auhtor</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="BookAuthor"
                                            onChange={this.handleChange} value={this.state.BookAuthor} name="BookAuthor" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="ShortDescription" className="form-label addBookLabels">Short Description</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="ShortDescription"
                                            onChange={this.handleChange} value={this.state.ShortDescription} name="ShortDescription" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="FullDescription" className="form-label addBookLabels">Full Description</label>
                                        <input type="text" className="form-control" style={{ borderRadius: '3px' }} id="FullDescription"
                                            onChange={this.handleChange} value={this.state.FullDescription} name="FullDescription" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Price" className="form-label addBookLabels">Price</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Price"
                                            onChange={this.handleChange} value={this.state.Price} name="Price" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Pages" className="form-label addBookLabels">Pages</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Pages"
                                            onChange={this.handleChange} value={this.state.Pages} name="Pages" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Quantity" className="form-label addBookLabels">Quantity</label>
                                        <input type="number" className="form-control" style={{ borderRadius: '3px' }} id="Quantity"
                                            onChange={this.handleChange} value={this.state.Quantity} name="Quantity" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="CoverImageUrl" className="form-label addBookLabels">CoverImageUrl</label>
                                        <input type="file" className="form-control" style={{ borderRadius: '3px' }} id="CoverImageUrl"
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
