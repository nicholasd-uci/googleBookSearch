// npm init -y, mongoose, express, axios //
const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./db')
    .then(() => app.listen(process.env.PORT || 3001))
    .catch(err => console.log(err))

