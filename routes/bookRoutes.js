const router = require('express').Router()
const { Book } = require('../models')

// GET All
router.get('/book', (req, res) => {
    Book.find()
        .then(book => res.json(book))
        .catch(err => console.log(err))
})


// POST One
router.post('/book', (req, res) => {
    Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => console.log(err))
})


// PUT One
router.put('/book/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json(book))
    .catch(err => console.log(err))
})


// DELETE One
router.delete('/book/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove())
        .then(book => res.json(book))
        .catch(err => console.log(err))
})

module.exports = router