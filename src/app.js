const express = require('express')
const app = express()
const { carsRoute } = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/cars', carsRoute)

// error handler
app.use(require('./middlewares/errorHandle'))

module.exports = app