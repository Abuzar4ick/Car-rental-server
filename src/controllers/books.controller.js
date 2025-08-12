const { booksService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /books/create
exports.newBook = asyncHandler(async (req, res, next) => {
    const response = await booksService.createBook(req.body)
    res.status(200).json(response)
})

// GET: /books
exports.allBooks = asyncHandler(async (req, res, next) => {
    const response = await booksService.getBooks()
    res.status(200).json(response)
})

// GET: /books/:id
exports.oneBook = asyncHandler(async (req, res, next) => {
    const response = await booksService.getBook(req.params.id)
    res.status(200).json(response)
})

// DELETE: /books/:id
exports.deleteBook = asyncHandler(async (req, res, next) => {
    const response = await booksService.deleteBook(req.params.id)
    res.status(200).json(response)
})