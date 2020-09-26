module.exports = require('mongoose').connect(process.env.MONGODB_uri || 'mongodb://localhost/googlebooks_db', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})