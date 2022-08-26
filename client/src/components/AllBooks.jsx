import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookTable from "./BookTable";

const AllBooks = () => {

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

    return (
        <>
            <div id="wrapper">
                <div className="module-section clearfix">
                    <ul id="content">
                        {
                            bookList.map((bookObj, i) => {
                                return (
                                    <li key={i} >
                                        <Link to={`/books/${bookObj._id}`}>
                                            <img className="card" src={bookObj.bookPicture} alt={bookObj.bookName}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <hr className="mb-4" />

            <BookTable className></BookTable>
        </>
    );
};

export default AllBooks;