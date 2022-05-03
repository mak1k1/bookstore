const db = require('./connect');
const BookModel = require('./books');
const books = require('./dbUtils');
const authors = require('./authors')

module.exports = {
    db,
    BookModel,
    books,
    authors
};