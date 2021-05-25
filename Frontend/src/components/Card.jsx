import React from 'react'

export default function Card(props) {
    return (
        <div className="card" style={{ "width": "15rem", 'margin': '15px' }} key={props.BookId}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.book.Name}</h5>
                <p className="card-text">{props.book.Description}</p>
                {/* <a href="#" className ="btn btn-primary">Go somewhere</a> */}
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