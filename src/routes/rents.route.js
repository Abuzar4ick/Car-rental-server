const { Router } = require('express')
const router = Router()
const { newRent, allRents, oneRent, deleteRent } = require('../controllers/rents.controller')
const authMiddleware = require('../middlewares/authorization')

router.post('/create', newRent)
router.get('/', authMiddleware, allRents)
router.get('/:id', authMiddleware, oneRent)
router.delete('/:id', authMiddleware, deleteRent)

module.exports = router