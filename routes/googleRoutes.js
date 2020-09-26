const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/google', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=AIzaSyAMqNANxbCMQrbBzYpOI5mSD5acczmEj3o&q=${req.params.items}`)
        .then(({ data }) => data.items.map(book => ({
            title: book.volumeInfo.title,
            author: book.volumeInfo.author[0],
            description: book.searchInfo.textSnippet.description,
            image: book.imageLinks.thumbnail,
            link: book.infoLink,
            bookID: book.id
        })))
        .then(apiBook => Book.find()
            .then(book => apiBook.filter(data => 
               book.every(dbData => dbData.bookID !== data.bookID))))
            .then(book => res.json(book))
            .catch(err => console.log(err))
})

module.exports = router