const books = require("../db")

const mutation = {
  createBook: async ({ title, authors, description }, context) => {
    try {
      const book = await books.createBook({ title, authors, description })
      return {
        data: book,
        ok: true,
        error: "",
      }
    } catch (error) {
      return {
        data: null,
        ok: false,
        error: error.message,
      }
    }
  },

  updateBook: async ({ id, title, authors, description }, context) => {
    try {
      const book = await books.updateBook(id, { title, authors, description })
      if (!book) {
        return {
          data: null,
          ok: false,
          error: "Book not found",
        }
      }
      return {
        data: book,
        ok: true,
        error: "",
      }
    } catch (error) {
      return {
        data: null,
        ok: false,
        error: error.message,
      }
    }
  },

  deleteBook: async ({ id }, context) => {
    try {
      const book = await books.deleteBook(id)
      if (!book) {
        return {
          data: null,
          ok: false,
          error: "Book not found",
        }
      }
      return {
        data: book,
        ok: true,
        error: "",
      }
    } catch (error) {
      return {
        data: null,
        ok: false,
        error: error.message,
      }
    }
  },
  addAuthor: async ({ name, description }, context) => {
    try {
      const author = await authors.addAuthor(name, description)
      if(!author) {
        return {
          data: null,
          ok: false,
          error: "Author not found"
        }
      }
      return {
        data: author,
        ok: true,
        error: "",
      }
    } catch (error) {
      return {
        data: null,
        ok: false,
        error: error.message,
      }
    }
  },
}

module.exports = {
  mutation,
}
