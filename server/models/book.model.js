const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, "Book name is required."],
    },
    bookAuthor: {
        type: String,
        required: [true, "Book author is required."],
    },
    bookOverview: {
        type: String,
        required: [true, "Book overview is required."],
        minlength: [20, "Book overview must be at least 20 characters long."]
    }
},
    { timestamps: true }
);

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;