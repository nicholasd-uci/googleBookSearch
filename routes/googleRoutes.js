const router = require = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/google', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAMqNANxbCMQrbBzYpOI5mSD5acczmEj3o`)
        .then(({ data }) => data.Search.map(book => ({
            title: book.title,
            author: book.author,
            description: book.description,
            image: book.image,
            link: book.link
        })))
        .then(apiBook => Book.find()
            .then(book => apiBook.filter(data => 
               book.every(dbData => dbData.googleID !== data.googleID))))
            .then(book => res.json(book))
            .catch(err => console.log(err))
})

module.exports = router