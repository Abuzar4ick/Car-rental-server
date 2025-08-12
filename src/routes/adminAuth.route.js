const { Router } = require('express')
const router = Router()
const { register, logout } = require('../controllers/adminAuth.controller')

router.post('/register', register)
router.post('/logout', logout)

module.exports = router