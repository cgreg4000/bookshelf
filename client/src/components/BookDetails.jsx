import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";

const BookDetails = () => {

    const { _id } = useParams()
    const history = useHistory()
    let [bookDetails, setBookDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${_id}`)
            .then(response => {
                console.log("Got One Book")
                console.log(response)
                setBookDetails(response.data.book)
            })
            .catch(err => {
                console.log("Error getting one pet")
                console.log(err)
            })
    }, [])

    const removeHandler = () => {
        axios.delete(`http://localhost:8000/api/books/remove/${_id}`)
            .then(response => {
                console.log(response)
                history.push('/')
            })
            .catch(err => {
                console.log("Error removing book")
                console.log(err)
            })
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <img className="img-large" src={bookDetails.bookPicture} alt={bookDetails.bookName} />
                </div>
                <div className="col left">
                    <h2>{bookDetails.bookName}</h2>
                    <div>
                        <h4>By {bookDetails.bookAuthor}</h4>
                        <h5>© {bookDetails.bookYear}</h5>
                    </div>
                    <hr />
                    <p>{bookDetails.bookOverview}</p>
                    <p><a href={bookDetails.bookPurchase}>Purchase</a></p>
                </div>
            </div>
            <Link className="btn btn-main m-3" to={`/books/${bookDetails._id}/edit`}>Edit</Link>
            <button className="btn btn-second" onClick={removeHandler}>Remove</button>
        </>
    )
}

export default BookDetails