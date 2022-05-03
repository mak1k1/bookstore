const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        books(limit: Int): [Book]
        book(id: ID!): Book
        authors(limit:Int): [Author]
        author(id: ID!): Author
    }
    type Mutation {
        createBook(title: String!, authors: [ID], description: String!): BookResponse
        updateBook(id: ID!, title: String, authors: [ID], description: String): BookResponse
        deleteBook(id: ID!): BookResponse
        createAuthor(name: String!, description: String!): AuthorResponse
        updateAuthor(id: ID!, name: String!, description: String!): AuthorResponse
        deleteAuthor(id: ID!): AuthorResponse
    }
    type Book {
        id: ID!
        title: String!
        description: String!
        authors: [Author]
    }
    type Author {
        id: ID!
        name: String!
        description: String!
        books: [Book]
    }
    type Books {
        books: [Book]
    }
    type BookResponse {
        data: Book
        error: String
        ok: Boolean
    }
    type AuthorResponse {
        data: Author
        error: String
        ok: Boolean
    }
`);

module.exports = schema;