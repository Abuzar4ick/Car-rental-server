const express = require('express')
const app = express()
const { carsRoute, booksRoute, adminAuthRoute, rentsRoute } = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/cars', carsRoute)
app.use('/api/books', booksRoute)
app.use('/api/rents', rentsRoute)
app.use('/api/admin', adminAuthRoute)

// error handler
const errorHandler = require('./middlewares/errorHandle')
app.use(errorHandler)

module.exports = app