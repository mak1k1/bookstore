const books = require("../db")

const query = {
  books: async ({ limit }, context) => {
    return await books.getAllBooks(limit)
  },
  book: async ({ id }, context) => {
    return await books.find((book) => book.id === id)
  },
}

module.exports = { query }
