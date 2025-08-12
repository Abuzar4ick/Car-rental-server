const { Books } = require('../models')
const ErrorResponse = require('../utils/errorResponse')

// POST: /books/create
// For: user
exports.createBook = async (book) => {
    const { car_type, place_rental, place_return, rental_date, return_date, phone_number } = book
    const newBook = await Books.create({
        car_type,
        place_rental,
        place_return,
        rental_date,
        return_date,
        phone_number
    })

    return {
        success: true,
        message: 'New book created successfully',
        data: newBook
    }
}

// GET: /books
// For: admin
exports.getBooks = async () => {
    const books = await Books.findAll()
    return { success: true, data: books }
}

// GET: /books/:id
// For: admin
exports.getBook = async (id) => {
    const book = await Books.findByPk(id)
    if (!book) throw new ErrorResponse('Book not found', 404);

    return { success: true, data: book }
}

// DELETE: /books/:id
// For: admin
exports.deleteBook = async (id) => {
    const book = await Books.findByPk(id)
    if (!book) throw new ErrorResponse('Book not found', 404);

    await Books.destroy({ where: { id } })
    return { success: true, message: 'Book deleted successfully' }
}