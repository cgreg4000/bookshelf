import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const BookForm = () => {

    let [bookName, setBookName] = useState("")
    let [bookAuthor, setBookAuthor] = useState("")
    let [bookYear, setBookYear] = useState("")
    let [bookPicture, setBookPicture] = useState("")
    let [bookOverview, setBookOverview] = useState("")
    let [bookPurchase, setBookPurchase] = useState("")
    let [formError, setFormError] = useState({})

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        let bookFormData = { bookName, bookAuthor, bookYear, bookPicture, bookOverview, bookPurchase }
        console.log(bookFormData)
        axios.post("http://localhost:8000/api/books/new", bookFormData)
            .then(response => {
                console.log(response)
                if (response.data.error) {
                    setFormError(response.data.error.errors)
                }
                else {
                    history.push('/')
                }
            })
            .catch(err => {
                console.log("book was not submitted")
                console.log(err)
            })
    }

    return (
        <div>
            <h1 className="mb-5">Add a Book</h1>
            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <label className="mb-2 font-weight-bold">Title:</label>
                <input type="text" className="form-control mb-2" onChange={(e) => setBookName(e.target.value)} />
                <p className="text-danger">{formError.bookName?.message}</p>
                <label className="mb-2">Author:</label>
                <input type="text" className="form-control mb-2" onChange={(e) => setBookAuthor(e.target.value)} />
                <p className="text-danger">{formError.bookAuthor?.message}</p>
                <label className="mb-2">Year:</label>
                <input type="text" className="form-control mb-2" onChange={(e) => setBookYear(e.target.value)} />
                <p className="text-danger">{formError.bookYear?.message}</p>
                <label className="mb-2">Cover:</label>
                <input type="text" className="form-control mb-2" onChange={(e) => setBookPicture(e.target.value)} />
                <p className="text-danger">{formError.bookPicture?.message}</p>
                <label className="mb-2">Overview:</label>
                <textarea rows="4" className="form-control mb-2" onChange={(e) => setBookOverview(e.target.value)} ></textarea>
                <p className="text-danger">{formError.bookOverview?.message}</p>
                <label className="mb-2">Purchase:</label>
                <input type="text" className="form-control mb-2" onChange={(e) => setBookPurchase(e.target.value)} />
                <p className="text-danger">{formError.bookPurchase?.message}</p>
                <input type="submit" className="btn btn-main m-2" name="" id="" />
                <Link className="btn btn-second m-2" to="/">Cancel</Link>
            </form>
        </div>
    )
}

export default BookForm
