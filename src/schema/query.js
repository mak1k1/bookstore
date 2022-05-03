const books = require("../db")
const authors = require("../db")

const query = {
  books: async ({ limit }, context) => {
    return await books.getAllBooks(limit)
  },
  book: async ({ id }, context) => {
    return await books.find((book) => book.id === id)
  },
  authors: async ({limit}, context) => {
    return await authors.getAllAuthors(limit)
  },
  author: async ({ id }, context) => {
    return await authors.find((author) => author.id === id)
  },
}

module.exports = { query }
