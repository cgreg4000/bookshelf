import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";

const EditBook = () => {

    const { _id } = useParams()
    let [bookDetails, setBookDetails] = useState({
        bookName: "",
        bookAuthor: "",
        bookYear: "",
        bookPicture: "",
        bookOverview: "",
        bookPurchase: ""
    })
    let [formError, setFormError] = useState({})
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${_id}`)
            .then(response => {
                console.log("Got One Book")
                console.log(response)
                setBookDetails(response.data.book)
            })
            .catch(err => {
                console.log("Error getting one book")
                console.log(err)
            })
    }, [])

    const changeHandler = (e) => {
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/books/update/${_id}`, bookDetails)
            .then(response => {
                console.log(response)
                if (response.data.error) {
                    setFormError(response.data.error.errors)
                }
                else {
                    history.push(`/books/${bookDetails._id}`)
                }
            })
            .catch(err => {
                console.log("book was not submitted")
                console.log(err)
            })
    }

    return (
        <div>
            <h1 className="mb-5">{bookDetails.bookName}</h1>
            <form onSubmit={submitHandler}>
                <label className="mb-2">Title</label>
                <input type="text" className="form-control mb-2" name="bookName" onChange={changeHandler} value={bookDetails.bookName} />
                <p className="text-danger">{formError.bookName?.message}</p>
                <label className="mb-2">Author</label>
                <input type="text" className="form-control mb-2" name="bookAuthor" onChange={changeHandler} value={bookDetails.bookAuthor} />
                <p className="text-danger">{formError.bookAuthor?.message}</p>
                <label className="mb-2">Year</label>
                <input type="text" className="form-control mb-2" name="bookYear" onChange={changeHandler} value={bookDetails.bookYear} />
                <p className="text-danger">{formError.bookYear?.message}</p>
                <label className="mb-2">Picture</label>
                <input type="text" className="form-control mb-2" name="bookPicture" onChange={changeHandler} value={bookDetails.bookPicture} />
                <p className="text-danger">{formError.bookPicture?.message}</p>
                <label className="mb-2">Overview</label>
                <textarea rows="4" className="form-control mb-2" name="bookOverview" onChange={changeHandler} value={bookDetails.bookOverview}></textarea>
                <p className="text-danger">{formError.bookOverview?.message}</p>
                <label className="mb-2">Purchase</label>
                <input type="text" className="form-control mb-2" name="bookPurchase" onChange={changeHandler} value={bookDetails.bookPurchase} />
                <p className="text-danger">{formError.bookPurchase?.message}</p>
                <input type="submit" className="btn btn-main m-2" name="" id="" value="Update" />
                <Link className="btn btn-second m-2" to={`/books/${bookDetails._id}`}>Cancel</Link>
            </form>
        </div>
    )
}

export default EditBook