module.exports = require('mongoose').connect('mongodb://localhost/googlebooks_db', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})