import books from '../db';


const query = {
    books: async ({limit}, context) => {
        return await books.getAllBooks(limit)
    },
    book: async ({id}, context) => {
        return booksData.find(book => book.id === id);
    }
};

export default query;