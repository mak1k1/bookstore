const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    authors: {
        type: [Schema.Types.ObjectId],
        ref: 'Author',
        required: false,
    },
});

module.exports = new model('Book', bookSchema);