const schema = require('./schema.js');
const query = require('./query.js').default;
const mutation = require('./mutation.js').default;

const resolvers = {
    ...query, ...mutation,
};

module.exports.resolver = resolvers;
module.exports.schema = schema;