const db = require('./connect');
const BookModel = require('./books');
const books = require('./dbUtils').default;

module.exports = {
    db,
    BookModel,
    books
};