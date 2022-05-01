import { find, findById, create, findByIdAndUpdate, findByIdAndDelete } from './books';

const getAllBooks = async (limit) => {
    return await find({}).limit(limit);
}

const getBookById = async (id) => {
    return await findById(id);
}

const createBook = async ({ title, description, author }) => {
    return await create({ title, description, author });
}

const updateBook = async (id, { title, description, author }) => {
    const set = {};
    if (title) set.title = title;
    if (description) set.description = description;
    if (author) set.author = author;
    return await findByIdAndUpdate(id, set);
}

const deleteBook = async (id) => {
    return await findByIdAndDelete(id);
}

export default {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}