const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    books: {
        type: [Schema.Types.ObjectId],
        ref: 'Book',
        required: false,
    },
});

module.exports = new model('Author', authorSchema);