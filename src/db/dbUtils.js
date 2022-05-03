const BookModel = require("./books")
const AuthorModel = require("./authors")

const getAllBooks = async (limit) => {
  return await BookModel.find({}).limit(limit)
}

const getBookById = async (id) => {
  return await BookModel.findById(id)
}

const createBook = async ({ title, description, authors }) => {
  return await BookModel.create({ title, description, authors })
}

const updateBook = async (id, { title, description, authors }) => {
  const set = {}
  if (title) set.title = title
  if (description) set.description = description
  if (authors) set.authors = authors
  return await BookModel.findByIdAndUpdate(id, set)
}

const deleteBook = async (id) => {
  return await BookModel.findByIdAndDelete(id)
}

const createAuthor = async({name, description}) => {
  return await AuthorModel.create({name, description})
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  createAuthor,
}
