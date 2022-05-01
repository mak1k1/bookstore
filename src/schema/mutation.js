import books from "../db"

const mutation = {
  addBook: async ({ title, author, description }, context) => {
    try {
      const book = await books.createBook({ title, author, description })
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

  updateBook: async ({ id, title, author, description }, context) => {
    try {
      const book = await books.updateBook(id, { title, author, description })
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
}

export default mutation
