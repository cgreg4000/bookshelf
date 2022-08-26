import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookTable = () => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then(response => {
                console.log("Got Books")
                console.log(response)
                setBookList(response.data.books.sort((a, b) => {
                    if (a.bookName.toUpperCase() < b.bookName.toUpperCase()) {
                        return -1
                    }
                    if (a.bookName.toUpperCase() > b.bookName.toUpperCase()) {
                        return 1
                    }
                    return 0
                }))
            })
            .catch(err => {
                console.log("Error getting books")
                console.log(err)
            })
    }, [])

    const authorSort = () => {
        axios.get("http://localhost:8000/api/books")
            .then(response => {
                console.log("Got Books")
                console.log(response)
                setBookList(response.data.books.sort((a, b) => {
                    if (a.bookAuthor.toUpperCase() < b.bookAuthor.toUpperCase()) {
                        return -1
                    }
                    if (a.bookAuthor.toUpperCase() > b.bookAuthor.toUpperCase()) {
                        return 1
                    }
                    return 0
                }))
            })
            .catch(err => {
                console.log("Error getting books")
                console.log(err)
            })
    }

    const titleSort = () => {
        axios.get("http://localhost:8000/api/books")
            .then(response => {
                console.log("Got Books")
                console.log(response)
                setBookList(response.data.books.sort((a, b) => {
                    if (a.bookName.toUpperCase() < b.bookName.toUpperCase()) {
                        return -1
                    }
                    if (a.bookName.toUpperCase() > b.bookName.toUpperCase()) {
                        return 1
                    }
                    return 0
                }))
            })
            .catch(err => {
                console.log("Error getting books")
                console.log(err)
            })
    }

    const yearSort = () => {
        axios.get("http://localhost:8000/api/books")
            .then(response => {
                console.log("Got Books")
                console.log(response)
                setBookList(response.data.books.sort((a, b) => {
                    if (a.bookYear < b.bookYear) {
                        return -1
                    }
                    if (a.bookYear > b.bookYear) {
                        return 1
                    }
                    return 0
                }))
            })
            .catch(err => {
                console.log("Error getting books")
                console.log(err)
            })
    }

    return (
        <>
            <button className="btn btn-main m-4" onClick={() => titleSort()}>Title</button>
            <button className="btn btn-main m-4" onClick={() => authorSort()}>Author</button>
            <button className="btn btn-main m-4" onClick={() => yearSort()}>Year</button>

            <table className="table table-striped mt-4 table-bordered">
                <thead>
                    <tr>
                        <th className="left" scope="col">Title</th>
                        <th className="left">Author</th>
                        <th className="left">Year</th>
                        <th className="left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((bookObj, i) => {
                            return (
                                <tr key={i}>
                                    <td className="left">{bookObj.bookName}</td>
                                    <td className="left">{bookObj.bookAuthor}</td>
                                    <td className="left">{bookObj.bookYear}</td>
                                    <td className="left"><Link to={`/books/${bookObj._id}`}>View</Link> | <a href={bookObj.bookPurchase}>Purchase</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default BookTable;