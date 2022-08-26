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

    bookYear:{
        type: Number,
        require: [true, "Book year is required."]
    },
    bookPicture: {
        type: String,
        required: [true, "Book picture is required."],
    },
    bookOverview: {
        type: String,
        required: [true, "Book overview is required."],
    },
    bookPurchase: {
        type: String
    }
},
    { timestamps: true }
);

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;