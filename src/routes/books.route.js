const { Router } = require('express')
const router = Router()
const { newBook, allBooks, oneBook, deleteBook } = require('../controllers/books.controller')
const authMiddleware = require('../middlewares/authorization')

router.post('/create', newBook)
router.get('/', authMiddleware, allBooks)
router.get('/:id', authMiddleware, oneBook)
router.delete('/:id', authMiddleware, deleteBook)

module.exports = router