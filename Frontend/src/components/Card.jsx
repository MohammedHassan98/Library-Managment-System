import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div className="card bookCard" key={props.book.BookId} style={{borderRadius:'18px'}}>
            <img className="card-img-top bookImg" style={{borderRadius: '18px'}} src={`http://localhost:5000/${props.book.CoverImageUrl}`} alt="bookImage" />
            <div className="card-body">
                <h5 className="card-title bookName">
                    <Link className="bookName" to={{
                        pathname: `/books/${props.book.BookId}`
                    }}>
                        {props.book.Name}
                    </Link>
                </h5>
                <h5 className="card-subtitle mb-2 text-muted bookAuthor">by {props.book.BookAuthor}</h5>
                <p className="card-text bookDesc">{props.book.ShortDescription}</p>
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