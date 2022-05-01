const envs = require('../envs');
const mongoose = require('mongoose');

mongoose.connect(envs.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection