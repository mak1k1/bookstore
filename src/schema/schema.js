const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        books(limit: Int): [Book]
        book(id: ID!): Book
        authors(limit:Int): [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addBook(title: String!, authors: [ID]!, description: String!): BookResponse
        updateBook(id: ID!, title: String, authors: [ID]!, description: String): BookResponse
        deleteBook(id: ID!): BookResponse
        addAuthor(name: String!, description: String!): AuthorResponse
        updateAuthor(id: ID!, name: String!, description: String!): AuthorResponse
        deleteAuthor(id: ID!): AuthorResponse
    }
    type Book {
        id: ID!
        title: String!
        authors: [Author]!
        description: String!
    }
    type Author {
        id: ID!
        name: String!
        description: String!
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