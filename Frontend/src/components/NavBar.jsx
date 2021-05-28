import React from 'react'

export default function NavBar() {
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
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Add Book
                                </button>

                            </a>
                        </li>
                    </ul>
                </div>
            </nav>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Book</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>

                                <div className="mb-3">
                                    <label htmlFor="BookName" className="form-label">Book Name</label>
                                    <input type="text" className="form-control" name="Name" id="BookName" aria-describedby="emailHelp" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="BookAuthor" className="form-label">Book Auhtor</label>
                                    <input type="text" className="form-control" id="BookAuthor" name="BookAuthor" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="ShortDescription" className="form-label">Short Description</label>
                                    <input type="text" className="form-control" id="ShortDescription" name="ShortDescription" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="FullDescription" className="form-label">Full Description</label>
                                    <input type="text" className="form-control" id="FullDescription" name="FullDescription" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="Price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="Price" name="Price" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="Pages" className="form-label">Pages</label>
                                    <input type="number" className="form-control" id="Pages" name="Pages" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="Quantity" className="form-label">Quantity</label>
                                    <input type="number" className="form-control" id="Quantity" name="Quantity" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="CoverImageUrl" className="form-label">CoverImageUrl</label>
                                    <input type="file" className="form-control" id="CoverImageUrl" name="CoverImageUrl" required />
                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
