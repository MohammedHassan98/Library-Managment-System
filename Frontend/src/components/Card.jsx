import React from 'react'
import book from '../Assets/Images/download.jpeg'
import edit from '../Assets/icons/edit.svg'
import del from '../Assets/icons/delete.svg'
import sell from '../Assets/icons/cart.svg'

export default function Card(props) {
    return (
        <div className="card bookCard" key={props.book.BookId}>
            <img className="card-img-top bookImg" src={book} alt="bookImage" />
            <div className="card-body">
                <h5 className="card-title bookName">{props.book.Name}</h5>
                <h5 className="card-subtitle mb-2 text-muted bookAuthor">by {props.book.BookAuthor}</h5>
                <p className="card-text bookDesc">{props.book.Description}</p>
            </div>

            <div className="card-footer bg-transparent">
                <ul>
                    <li>
                        <button className="btn">
                            <img src={edit} alt="editButton" />
                        </button>
                    </li>

                    <li>
                        <button className="btn">
                            <img src={del} alt="delButton" />
                        </button>
                    </li>

                    <li>
                        <button className="btn">
                            <img src={sell} alt="sellButton" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    )
}

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