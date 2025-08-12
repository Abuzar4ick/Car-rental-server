const { Router } = require('express')
const router = Router()
const { newCar, allCars, oneCar, deleteCar, updateCar } = require('../controllers/cars.controller')
const authMiddleware = require('../middlewares/authorization')
// cloudinary storage (file upload)
const { storage } = require('../storage/cloudinary')
const multer = require('multer')
const upload = multer({ storage })

router.post('/create', authMiddleware, upload.fields([{ name: 'main_image', maxCount: 1 }, { name: 'detail_images', maxCount: 5 }]), newCar)
router.get('/', allCars)
router.get('/:id', oneCar)
router.put('/:id', authMiddleware, upload.fields([{ name: 'main_image', maxCount: 1 }, { name: 'detail_images', maxCount: 5 }]), updateCar)
router.delete('/:id', authMiddleware, deleteCar)

module.exports = router