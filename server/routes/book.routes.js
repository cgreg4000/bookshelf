const BookController = require('../controllers/book.controller');

module.exports = app => {
    app.get('/api/books', BookController.getAllBooks);
    app.post('/api/books/new', BookController.createBook);
    app.get('/api/books/:_id', BookController.getOneBook);
    app.put('/api/books/update/:_id', BookController.updateBook);
    app.delete('/api/books/remove/:_id', BookController.adoptBook)
}